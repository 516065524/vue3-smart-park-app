<template>
  <view class="page-wrapper">
    <form class="page-form">
      <view class="form-item-wrapper">
        <view class="form-item-lable"> 原密码 </view>
        <input v-model.trim="form.oldPwd" type="text" password :maxlength="20" />
      </view>
      <view class="form-item-wrapper">
        <view class="form-item-lable"> 新密码 </view>
        <input v-model.trim="form.newPwd" type="text" password :maxlength="20" />
      </view>
      <view class="form-item-wrapper">
        <view class="form-item-lable"> 确认密码 </view>
        <input v-model="form.confirmPwd" type="text" password :maxlength="20" />
      </view>
    </form>
    <view class="tip-text"> (6位以上，包含数字或字母) </view>
    <view class="bottom-area">
      <button class="submit-button" type="default" plain @click="formSubmit">提交</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

let form = reactive({
  oldPwd: '',
  newPwd: '',
  confirmPwd: '',
})
const formSubmit = () => {
  if (form.oldPwd) {
    if (form.newPwd && form.newPwd.length >= 5) {
      if (form.newPwd == form.confirmPwd) {
        updateSubmit({
          newPwd: form.newPwd,
          oldPwd: form.oldPwd,
        })
      } else {
        // toastErr('密码不一致')
      }
    } else {
      //   toastErr('请输入6位及以上长度新密码')
    }
  } else {
    // toastErr('请输入原密码')
  }
}
const updateSubmit = (form) => {
  console.log(form)
}
</script>

<style scoped lang="scss">
view {
  box-sizing: border-box;
}

.page-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f4f5f7;
  overflow: hidden;

  .bottom-area {
    flex: 1;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding-bottom: 80rpx;

    .submit-button {
      width: 74%;
      height: 72rpx;
      background-color: #4468f5;
      border-radius: 36rpx;
      color: #ffffff;
      font-size: 16px;
      line-height: 72rpx;
      border: none;
    }
  }

  .tip-text {
    font-size: 12px;
    font-weight: 400;
    color: #6d7278;
    line-height: 82rpx;
    padding: 0 32rpx;
  }

  .page-form {
    background: #ffffff;
    margin-top: 20rpx;

    .form-item-wrapper {
      display: flex;
      align-items: center;
      margin-left: 32rpx;
      border-bottom: 1px solid #dcdee2;
      line-height: 100rpx;

      .form-item-lable {
        font-size: 14px;
        font-weight: 400;
        color: #17233d;
        width: 160rpx;
      }

      input {
        flex: 1;
        text-align: right;
        padding-right: 32rpx;
      }
    }
  }
}
</style>
