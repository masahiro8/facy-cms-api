import firebase from "firebase";

//json
//https://github.com/masahiro8/facy-cms-v2/blob/main/public/json/config_schedule.json

const config_reserves_format = {
  day_of_week: {
    Monday: {
      active: true,
      start_time: "10:00",
      end_time: "11:00",
      time: "30",
      detail: [
        {
          timeid: 1,
          active: true,
          start: "10:00",
          end: "10:30"
        },
        {
          timeid: 2,
          active: true,
          start: "10:30",
          end: "11:00"
        }
      ]
    },
    Tuesday: {
      active: true,
      start_time: "10:00",
      end_time: "11:00",
      time: "30",
      detail: [
        {
          timeid: 1,
          active: true,
          start: "10:00",
          end: "10:30"
        },
        {
          timeid: 2,
          active: true,
          start: "10:30",
          end: "11:00"
        }
      ]
    },
    Wednesday: {
      active: true,
      start_time: "10:00",
      end_time: "11:00",
      time: "30",
      detail: [
        {
          timeid: 1,
          active: true,
          start: "10:00",
          end: "10:30"
        },
        {
          timeid: 2,
          active: true,
          start: "10:30",
          end: "11:00"
        }
      ]
    },
    Thursday: {
      active: true,
      start_time: "10:00",
      end_time: "11:00",
      time: "30",
      detail: [
        {
          timeid: 1,
          active: true,
          start: "10:00",
          end: "10:30"
        },
        {
          timeid: 2,
          active: true,
          start: "10:30",
          end: "11:00"
        }
      ]
    },
    Friday: {
      active: true,
      start_time: "10:00",
      end_time: "11:00",
      time: "30",
      detail: [
        {
          timeid: 1,
          active: true,
          start: "10:00",
          end: "10:30"
        },
        {
          timeid: 2,
          active: true,
          start: "10:30",
          end: "11:00"
        }
      ]
    },
    Saturday: {
      active: true,
      start_time: "10:00",
      end_time: "11:00",
      time: "30",
      detail: [
        {
          timeid: 1,
          active: true,
          start: "10:00",
          end: "10:30"
        },
        {
          timeid: 2,
          active: true,
          start: "10:30",
          end: "11:00"
        }
      ]
    },
    Sunday: {
      active: true,
      start_time: "10:00",
      end_time: "11:00",
      time: "30",
      detail: [
        {
          timeid: 1,
          active: true,
          start: "10:00",
          end: "10:30"
        },
        {
          timeid: 2,
          active: true,
          start: "10:30",
          end: "11:00"
        }
      ]
    }
  },
  date: {
    "2020": {
      "01": {
        "01": {
          active: true,
          detail: [
            {
              timeid: 1,
              active: true,
              start: "10:00",
              end: "10:30"
            },
            {
              timeid: 2,
              active: true,
              start: "10:30",
              end: "11:00"
            }
          ]
        }
      }
    }
  }
};

export const ConfigReserve = () => {
  const db = firebase.database();

  const init = () => {
    return new Promise(async (resolved) => {
      await db.ref("/config_reserves").set(config_reserves_format, (error) => {
        if (error) {
          resolved({ result: false, error });
        } else {
          resolved({ result: true });
        }
      });
    });
  };

  //全件
  const get = () => {
    return new Promise(async (resolved) => {
      const ref = await db.ref("/config_reserves");
      ref.on("value", (snapshot) => {
        const _values = snapshot.val();
        resolved(_values);
      });
    });
  };

  //曜日単位で更新
  const updateDayOfWeek = async (params) => {
    return new Promise(async (resolved) => {
      const reserves = await get();
      const day_of_week = Object.assign(reserves.day_of_week, params);
      await db.ref("/config_reserves/day_of_week").set(day_of_week, (error) => {
        if (error) {
          resolved({ result: false, error });
        } else {
          resolved({ result: true });
        }
      });
    });
  };

  //日付単位で更新
  const getKeyParam = (datearray, objects) => {
    const key = datearray.pop();
    if (!key) {
      return objects;
    } else {
      return getKeyParam(datearray, { [key]: objects });
    }
  };
  const reqKey = (dateconfig, datearray, path, value) => {
    const key = datearray.shift();
    if (key in dateconfig) {
      path = `${path}/${key}`;
      return reqKey(dateconfig[key], datearray, path, value);
    } else {
      //ここから値を再帰的に作成
      const _key = datearray.pop();
      const param = getKeyParam(datearray, { [_key]: value });
      return { path, param: { [key]: param } };
    }
  };

  const setDate = async ({ year, month, day, params }) => {
    console.log("params = ", params);
    return new Promise(async (resolved) => {
      const reserves = await get();
      //再帰的に登録できるキーを抽出
      const { path, param } = reqKey(
        { ...reserves.date },
        [year, month, day],
        "/config_reserves/date",
        params
      );
      console.log("path = ", path, param);
      await db.ref(path).update(param, (error) => {
        if (error) {
          resolved({ result: false, error });
        } else {
          resolved({ result: true });
        }
      });
    });
  };

  return {
    init,
    get,
    updateDayOfWeek,
    setDate
  };
};
