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
					<button class="p-link" :style="{ height: '57px' }">
                        <img :src="category.image" width="35" alt="avatar1"/>
						<span class="name">{{category.name}}</span>
					</button>
				</li>
			</ul>
		</Panel>
        <Dialog v-model:visible="categoryDialog" :style="{width: '450px'}" header="Category Details" :modal="true" class="p-fluid">
            <div class="p-field">
                <label for="name">Category Name</label>
                <InputText id="name" v-model.trim="category.name" required="true" autofocus />
                <button @click="addCategory">click</button>
            </div>
        </Dialog>
	</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import store from "../store/store";

import Panel from 'primevue/panel';

export default defineComponent({
  name: "Categries",
  data() {
    return {
        categories: [{}],
        categoryDialog: false,
        category: {
            name: ""
        }
    };
  },
  components: {Panel},
  props: ["expenses"],
  methods: {
      openNewCategory() {
          this.categoryDialog = true;
      },
      addCategory() {
          store.state.categories.push({ name: this.category.name, code: 2})
      }
  },
  computed: {
      getCategories() {
          return store.state.categories;
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

            button {
                display: flex;
                align-items: center;
                padding: 9px;
                width: 100%;
                box-sizing: border-box;
                text-decoration: none;
                position: relative;
                border-radius: 2px;
                transition: background-color .2s;

                .name {
                    margin-left: 1em;
                    font-size: 18px;
                }

                .email {
                    position: absolute;
                    right: 10px;
                    top: 30px;
                    font-size: 14px;
                    color: #707070;
                }

                &:hover {
                    cursor: pointer;
                    background-color: #eeeeee;
                }
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
</style>