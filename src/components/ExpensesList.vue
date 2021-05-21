<template>
    <div class="layout-content">
        <div class="content-section implementation">
            <p v-if="!getExpenses.length">No Expenses registered yet</p>
            <p v-if="getExpenses.length">yes Expenses registered yet</p>
            <div v-if="getExpenses.length" class="card">
                <DataTable :value="getExpenses">
                    <Column field="description" header="Description" />
                    <Column field="price" header="Price" />
                    <Column field="categoryId" header="Category">
                        <template #body="slotProps">
                            {{ getCategoryName(slotProps.data.categoryId)}}
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default defineComponent({
  name: "ExpensesList",
  props: [],
  components: {
    DataTable,
    Column
  },
  data() {
    return {
      expenses: []
    };
  },
  created() {
      this.expenses = this.$store.state.expenses as [];
  },
  methods: {
    getCategoryName(id: string): any {
        return this.$store.getters.getCategoryNameById(id);
    }
  },
  computed: {
      getExpenses(): any {
          console.log(this.$store.state.expenses)
          return this.$store.state.expenses;
      }
  }
});
</script>
<style lang="scss" scoped>
.layout-content {
    .content-section {
        padding: 2rem;

        &.introduction {
            background-color: #f8f9fa;
            color: #495057;
            padding-bottom: 0;
            display: flex;
            align-items: top;
            justify-content: space-between;
        }

        &.implementation {
            background-color: #f8f9fa;;
            color: #495057;

            +.documentation {
                padding-top: 0;
            }
        }
    }

    .card {
        background: #ffffff;
        padding: 2rem;
        box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
        border-radius: 4px;
        margin-bottom: 2rem;
    }
}
</style>