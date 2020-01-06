import React, { useCallback } from 'react'
import isEmpty from 'lodash/isEmpty'
import { message } from 'antd'
import { MessageType } from 'antd/lib/message'

export const useMessage = () => {
  return useCallback((messageType, responseError:any) => {
    if (!isEmpty(responseError)) {
      message.error(responseError.message)
      if (responseError.errors && responseError.errors.length !== 0) {
        responseError.errors.forEach((item:any) => {
          message.error(item.msg)
        })
      }
    }
  }, [])
}
