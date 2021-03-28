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
        <Dropdown
          v-model="selectedCategory"
          :options="categories"
          optionLabel="name"
          placeholder="Select a City"
        />
      </div>
    </div>
    <div class="p-fluid p-grid">
      <div class="p-field p-md-offset-5 p-md-2 p-col-12">
        <Button label="Submit" @click="submitExpense" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
// import store from "../store/store";

export default defineComponent({
  name: "ExpenseInsert",
  props: ["addExpenseGlobaly"],
  data() {
    return {
      selectedCategory: null,
      description: "",
      price: null,
      categories: [{}],
    };
  },
  async mounted() {
    const categories = await axios.get(process.env.VUE_APP_CATEGORIES_URL);
    this.categories = categories.data;
  },
  methods: {
    submitExpense(): void {
      const newExpense = {
        id: 12,
        title: this.description,
        price: this.price,
        category: this.selectedCategory,
        start: new Date().getTime(),
      };
      this.$emit("submit-expense", newExpense);
      this.resetFields();
    },
    resetFields() {
      this.description = "";
      this.price = null;
      this.selectedCategory = null;
    },
  },
});
</script>

<style></style>
