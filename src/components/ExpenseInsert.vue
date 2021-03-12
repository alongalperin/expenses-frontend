<template>
  <div>
    <div class="p-fluid p-grid">
      <div class="p-field p-md-4 p-col-12">
        <span class="p-float-label">
          <InputText id="description" type="text" v-model="description" />
          <label for="description">Description</label>
        </span>
      </div>
      <div class="p-field p-md-4 p-col-12">
        <span class="p-float-label">
          <InputText id="price" type="text" v-model="price" />
          <label for="price">Price</label>
        </span>
      </div>
      <div class="p-field p-md-4 p-col-12">
        <span class="p-float-label">
          <InputText id="category" type="text" v-model="category" />
          <label for="category">Category</label>
        </span>
      </div>
    </div>
    <div class="p-fluid p-grid">
      <div class="p-field p-lg-offset-5 p-md-2 p-col-12">
        <Button label="Submit" @click="submitExpense" />
        <p>{{ testStore() }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "../store/store";

export default defineComponent({
  name: "ExpenseInsert",
  props: ["addExpenseGlobaly"],
  data() {
    return {
      description: "",
      price: null,
    };
  },
  methods: {
    submitExpense(): void {
      const newExpense = {
        id: 12,
        title: this.description,
        // description: this.description,
        price: this.price,
        start: new Date().getTime(),
      };
      this.$emit("submit-expense", newExpense);
    },
    testStore(): string {
      return store.state.name;
    },
  },
});
</script>

<style></style>
