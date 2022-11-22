<script setup lang="ts">
import { reactive, ref } from "vue"
import { LoginFrame } from "./scripts"
const mediator = reactive(new LoginFrame())
</script>

<template>
  <section class="login-frame">
    <div class="user-radio">
      <div>
        <input
          type="radio"
          v-model="mediator.radioGuest.value"
          :value="'on'"
          @click="mediator.radioGuest.itemStateChanged"
        />
        <label>ゲスト</label>
      </div>
      <div>
        <input
          type="radio"
          v-model="mediator.radioLogin.value"
          :value="'on'"
          @click="mediator.radioLogin.itemStateChanged"
        />
        <label>ログイン</label>
      </div>
    </div>
    <div class="user-name">
      <label>ユーザーネーム</label>
      <input
        type="text"
        :disabled="!mediator.textUser.enabled"
        v-model="mediator.textUser.text"
        @input="mediator.textUser.textValueChanged"
      />
    </div>
    <div class="password">
      <label>パスワード</label>
      <input
        type="text"
        :disabled="!mediator.textPass.enabled"
        v-model="mediator.textPass.text"
        @input="mediator.textPass.textValueChanged"
      />
    </div>
    <div class="buttons">
      <button :disabled="!mediator.buttonOk.enabled">OK</button>
      <button :disabled="!mediator.buttonCancel.enabled">キャンセル</button>
    </div>
  </section>
</template>
<style scoped>
.user-radio {
  display: flex;
}
.user-name,
.buttons {
  margin-top: 8px;
}
</style>
