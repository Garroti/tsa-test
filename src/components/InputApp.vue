<template>
    <div>
        <div v-if="typeLine === 'normal'" class="form-group">
            <label class="label-style"><slot /></label>
            <input
                class="form-control input-style"
                :type="type"
                v-if="controlType === 'input'"
                v-bind="$attrs"
                :value="value"
                @input="$emit('input', $event.target.value)"
            >
            <textarea
                class="form-control input-style"
                :type="type"
                v-if="controlType === 'textarea'"
                rows="10"
                :value="value"
                @input="$emit('input', $event.target.value)">
            </textarea>
        </div>
        <div v-if="typeLine === 'row'" class="form-group row">
            <label class="label-style"><slot /></label>
            <input
                class="col-sm-10 input-style"
                :type="type"
                v-if="controlType === 'input'"
                v-bind="$attrs"
                :value="value"
                @input="$emit('input', $event.target.value)"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'InputApp',
    data () {
        return {

        }
    },
    props: {
        typeLine: {
            type: String,
            default: 'normal'
        },
        controlType: {
            type: String,
            default: 'input'
        },
        value: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        }
    }
}
</script>

<style scoped>
    .input-style {
        background: #EFF4F9;
        box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
    }
    .label-style {
        color: #445566;
    }
</style>