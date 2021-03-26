<template>
	<div class="p-col-12 p-lg-4 contacts">
		<Panel header="Categories">
			<ul>
				<li v-for="category in categories" :key="category.name">
					<button class="p-link" :style="{ height: '57px' }">
                        <img :src="category.image" width="35" alt="avatar1"/>
                        <!-- <Pizza /> -->
						<span class="name">{{category.name}}</span>
					</button>
				</li>
			</ul>
		</Panel>
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
        categories: [{}]
    };
  },
  components: {Panel},
  props: ["expenses"],
  async mounted() {
    const categories = await axios.get("http://localhost:8000/categories");
    this.categories = categories.data;
    console.log(categories.data[0].image)
  },
  methods: {
      getImagePath(category: any) {
          return "@/assets/icons/" + category.image;
      }
  }
});
</script>
<style lang="scss" scoped>
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
    }
</style>