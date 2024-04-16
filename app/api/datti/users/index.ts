/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** メールアドレスによるユーザー情報の取得 */
  get: {
    status: 200
    /** The request has succeeded. */
    resBody: Types.UserList
    reqBody: Types.UserGetRequest
  }
}
