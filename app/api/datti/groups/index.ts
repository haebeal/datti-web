/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** 所属しているグループの取得 */
  get: {
    status: 200
    /** The request has succeeded. */
    resBody: Types.GroupList
  }

  /** グループの作成 */
  post: {
    status: 200
    /** The request has succeeded. */
    resBody: Types.GroupUsers
    reqBody: Types.GroupCreateRequest
  }
}
