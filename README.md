# Facy cms api

## 1.アカウント管理

#### ログイン

UserAuth/login

#### ログアウト

UserAuth/logout

#### ユーザー登録

UserAuth/signup

#### パスワード再設定メールアドレス登録

UserAuth/sendPasswordResetEmail

#### ユーザー一覧

Users/getUsers

#### ユーザー情報の更新

Users/updateUserProfile

## 2.予約スケジュール管理

#### 予約一覧取得

Reserves/getReserves

#### 新規予約登録

Reserves/setNewReserve

#### 予約の更新

Reserves/updateReserve

#### 予約の削除

Reserves/deleteReserve

## 3.日付設定

#### 初期化

ConfigReserve/init

#### 設定全て取得

ConfigReserve/get

####　個別日付設定を取得

ConfigReserve/getDate

#### 個別日付設定を設定

ConfgiReserve/setDate

#### 曜日設定を取得

ConfgiReserve/getDayOfWeek

#### 曜日設定を更新

ConfgiReserve/updateDayOfWeek


## 4.type id 設定

#### type_idを取得
ViewTypeids/get

#### type_idを新規作成
ViewTypeids/create

#### 既存type_idを更新
ViewTypeids/update

#### type_idを削除
ViewTypeids/remove
