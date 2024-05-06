/* eslint-disable */
export type Bank = {
  /** 金融機関コード */
  bankCode: string
  /** 支店番号 */
  branchCode: string
  /** 口座番号 */
  accountCode: string
}

export type Event = {
  /** イベントID */
  id: string
  /** イベント名 */
  name: string
  /** イベントの日付 */
  evented_at: string

  /** イベント作成者のユーザー情報 */
  created_by: User

  /** イベントの紐づいたグループID */
  group_id: string
}

export type EventCreateRequest = {
  /** イベント名 */
  name: string
  /** イベントの日付 */
  evented_at: string
}

export type EventUpdateRequest = {
  /** イベント名 */
  name: string
  /** イベントの日付 */
  evented_at: string
}

export type EventsResponse = {
  events: Event[]
}

export type Group = {
  /** グループID */
  id: string
  /** グループ名 */
  name: string
}

export type GroupCreateRequest = {
  /** グループ名 */
  name: string
  /** UID */
  uids: string[]
}

export type GroupResponse = {
  /** グループID */
  id: string
  /** グループ名 */
  name: string
  /** ユーザー情報 */
  users: User[]
}

export type GroupUpdateRequest = {
  /** グループ名 */
  name: string
}

export type GroupsResponse = {
  /** グループ */
  groups: Group[]
}

export type Members = {
  /** UID */
  uids: string[]
}

export type User = {
  /** ユーザーID */
  uid: string
  /** ユーザー名 */
  name: string
  /** メールアドレス */
  email: string
  /** 画像URL */
  photoUrl: string

  /** 口座情報 */
  bank: Bank
}

export type UserUpdateRequest = {
  /** ユーザー名 */
  name: string
  /** 画像URL */
  photoUrl: string
  /** 金融機関コード */
  bankCode: string
  /** 支店番号 */
  branchCode: string
  /** 口座番号 */
  accountCode: string
}

export type UsersResponse = {
  users: User[]
}
