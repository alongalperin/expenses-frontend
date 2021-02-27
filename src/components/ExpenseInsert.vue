<template>
    <div>
        <div class="p-fluid p-grid">
            <div class="p-field p-col-12 p-md-3">
                <span class="p-float-label">
                    <InputText id="inputtext" type="text" v-model="value1" />
                    <label for="inputtext">InputText</label>
                </span>
            </div>
            <div class="p-field p-col-12 p-md-3">
                <span class="p-float-label">
                    <InputText id="inputtext-left" type="text" v-model="valueIconLeft" />
                    <label for="inputtext-left">Left Icon</label>
                </span>
            </div>
            <div class="p-field p-col-12 p-md-3">
                <span class="p-float-label">
                    <InputText id="inputtext-right" type="text" v-model="valueIconRight" />
                    <label for="inputtext-right">Right Icon</label>
                </span>
            </div>
            <div class="p-field p-col-12 p-md-3">
                <Button label="Submit" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ExpenseInsert',
  methods: {
      do: () => {
          const a: number = 3;
      }
  }
}
</script>


<style>
</style>
