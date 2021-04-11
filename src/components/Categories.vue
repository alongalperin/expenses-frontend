<template>
	<div class="p-col-12 p-lg-4 contacts">
		<Panel>
            <template #header>
                <span class="panel-header-text">Categories</span>
            </template>
            <template #icons>
                <Button label="New" icon="pi pi-plus" class="panel-header-button" @click="openNewCategory" />
            </template>
			<ul>
				<li v-for="category in getCategories" :key="category.name">
					<span class="category-wrapper" :class="isSelected(category.name) ? 'selected' : ''" :style="{ height: '57px' }" v-on:click="setSelectedCategory(category.name)">
                        <img :src="category.image" width="35" alt="avatar1"/>
						<span class="category-name">{{category.name}}</span>
                        <span
                            class="category-edit-button"
                            :class="isSelected(category.name) ? 'selected-category-edit' : ''">
                            edit
                        </span>
					</span>
				</li>
			</ul>
		</Panel>
        <Dialog v-model:visible="categoryDialog" :style="{width: '450px'}" header="Category Details" :modal="true" class="p-fluid">
            <div class="p-field">
                <label for="name">Category Name</label>
                <InputText id="name" v-model.trim="category.name" required="true" autofocus />
                <button class="add-category-submit" @click="addCategory">click</button>
            </div>
        </Dialog>
	</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
// import store from '../store/store'

import Panel from 'primevue/panel';

export default defineComponent({
  name: "Categries",
  data() {
    return {
        categoryDialog: false,
        category: {
            name: ""
        },
        selectedCategory: "",
    };
  },
  components: {Panel},
  props: ["expenses"],
  methods: {
      openNewCategory() {
        this.categoryDialog = true;
      },
      async addCategory () {
        this.$store.dispatch('addCategory', { name: this.category.name, code: 2});
      },
      setSelectedCategory(name: string) {
          if (this.selectedCategory !== name) {
            this.selectedCategory = name;
          } else {
            this.selectedCategory = "";
          }
      },
    isSelected(name: string): boolean {
        return this.selectedCategory === name;
    }
  },
  computed: {
      getCategories(): any {
        // @ts-ignore
        return this.$store.state.categories;
      }
  }
});
</script>
<style lang="scss" scoped>
.p-panel-icons {
    display: none !important;
}

.contacts {
    margin: 0px auto;

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;

        li {
            border-bottom: 1px solid #e3e3e3;

            .category-wrapper {
                display: flex;
                align-items: center;
                padding: 9px;
                width: 100%;
                box-sizing: border-box;
                text-decoration: none;
                position: relative;
                border-radius: 2px;
                transition: background-color .2s;

                .category-name {
                    margin-left: 1em;
                    font-size: 18px;
                }

                &:hover {
                    cursor: pointer;
                    background-color: #eeeeee;

                    .category-edit-button {
                        position: absolute;
                        right: 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: grey;
                    }
                }
            }

            .category-edit-button {
                display: none;
            }

            &:last-child {
                border: 0;
            }
        }
    }

    .p-panel-content {
        min-height: 256px;
    }

    .panel-header-text {
        font-weight: 600;
    }

    .panel-header-button {
        right: 10px;
    }
}

.selected {    
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #b7e0b8;

    .category-edit-button {
        position: absolute;
        right: 20px;
        display: flex !important;
        align-items: center;
        justify-content: center;
        background: grey !important;
    }
}
</style>