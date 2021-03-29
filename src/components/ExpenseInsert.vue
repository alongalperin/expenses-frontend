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
          :options="getCategories"
          optionLabel="name"
          placeholder="Select a Category"
        >
          <template #option="slotProps">
            <div class="p-d-flex p-ai-center country-item">
              <div class="option-wrapper">
                <img class="flag" :src="slotProps.option.image" />
                <div>{{slotProps.option.name}}</div>
              </div>
            </div>
          </template>
        </Dropdown>
        
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
import store from "../store/store";

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
  computed: {
    getCategories() {
      return store.state.categories;
    }
  }
});
</script>

<style lang="scss" scoped>
.country-item {
  display: flex;
  align-items: center;
  text-align: center;

  .option-wrapper {
    display: flex;
    flex-direction: row;
  }
}

.country-item img.flag {
  width: 18px;
  margin-right: .5rem;
}

.flag {
  vertical-align: middle;
}

span.flag {
  width:44px;
  height:30px;
  display:inline-block;
}

img.flag {
  width:30px;
}
</style>
