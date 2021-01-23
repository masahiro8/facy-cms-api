import firebase from "firebase";
import { encrypt } from "./util/Encrypt.js";
import { getToday, getTodayObject, formatDateObject } from "./util/DateUtil.js";
/*
{
  "id": 10001,
  "date": "2020-01-24",
  "date_year": "2020",
  "date_month": "01",
  "date_day": "24",
  "start_time": "10:30",
  "start_time_hour": "10",
  "start_time_day": "30",
  "end_time": "11:00",
  "end_time_hour": "11",
  "end_time_day": "00",
  "user_mail": "xxx@xxx.com",
  "video_user_id": "SvvmjuyusZJa4fpv",
  "video_cms_id": "fJFhH6m1miG9jcsE"
}
 */

export const Reserves = () => {
  const db = firebase.database();

  /**
   *　予約一覧を取得
   * {yyyy, mm, dd} 形式で絞り込み
   * 全てnullの場合は全件取得
   * @param {string*null} year "01"とか２桁の文字列
   * @param {string*null} month　"01"とか２桁の文字列
   * @param {string*null} day　"01"とか２桁の文字列
   */
  const getReserves = ({ year, month, day }) => {
    return new Promise(async (resolved) => {
      if (year && !month && !day) {
        const ref = await db
          .ref("/reserves")
          .orderByChild("year")
          .equatTo(year);
        ref.on("value", (snapshot) => {
          const _reserves = snapshot.val();
          resolved(_reserves);
        });
      } else if (year && month && !day) {
        const ref = await db
          .ref("/reserves")
          .orderByChild("year")
          .equatTo(year)
          .orderByChild("month")
          .equatTo(month);
        ref.on("value", (snapshot) => {
          const _reserves = snapshot.val();
          resolved(_reserves);
        });
      } else if (year && month && day) {
        const ref = await db
          .ref("/reserves")
          .orderByChild("year")
          .equatTo(year)
          .orderByChild("month")
          .equatTo(month)
          .orderByChild("day")
          .equatTo(day);
        ref.on("value", (snapshot) => {
          const _reserves = snapshot.val();
          resolved(_reserves);
        });
      } else {
        const ref = await db.ref("/reserves");
        ref.on("value", (snapshot) => {
          const _reserves = snapshot.val();
          resolved(_reserves);
        });
      }
    });
  };

  /**
   * 予約を登録
   * @param {string} date 日付形式 2020-12-31
   * @param {string} start_time 時間形式 10:30
   * @param {string} end_time 時間形式 10:30
   * @param {string} user_mail メール
   */
  const setNewReserve = ({ reserve_date, start_time, end_time, email }) => {
    return new Promise(async (resolved) => {
      const _reserve_date = `${reserve_date}`.split("-");
      const _date = new Date(
        _reserve_date[0],
        _reserve_date[1],
        _reserve_date[2]
      );
      const id = encrypt(_date.getTime());
      const params = {
        id: id,
        date: reserve_date,
        date_year: _reserve_date[0],
        date_month: _reserve_date[1],
        date_day: _reserve_date[2],
        start_time,
        start_time_hour: start_time.split(":")[0],
        start_time_day: start_time.split(":")[1],
        end_time,
        end_time_hour: end_time.split(":")[0],
        end_time_day: end_time.split(":")[1],
        user_mail: email
      };
      db.ref("reserves/" + id).set(params, (error) => {
        if (error) {
          resolved({ result: false, error });
        } else {
          resolved({ result: true });
        }
      });
      console.log(params);
      resolved(params);
    });
  };

  return {
    getReserves,
    setNewReserve
  };
};
