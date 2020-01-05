import React, { useCallback } from 'react'
import isEmpty from 'lodash/isEmpty'
import { message } from 'antd'

export const useMessage = () => {
  return useCallback((messageType, responseError) => {
    if (!isEmpty(responseError)) {
      message[messageType](responseError.message)
      if (responseError.errors && responseError.errors.length !== 0) {
        responseError.errors.forEach(item => {
          message[messageType](item.msg)
        })
      }
    }
  })
}
