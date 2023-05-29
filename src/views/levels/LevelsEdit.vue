<script setup>
    import useLevels from '../../composables/levels';
    import { onMounted } from 'vue';

    const {level, getLevel, updateLevel, errors} = useLevels();

    const props = defineProps({
        id: {
            required: true,
            type: String,
        }
    });

    onMounted(() => getLevel(props.id))

</script>
<template>
        <div class="mt-12">
        <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="updateLevel($route.params.id)">
            <div class="space-y-6">
                <div class="mb-6">
                    <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nível de senioridade: </label>
                    <input type="text" id="name" v-model="level.name"
                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite o nome do nível" required>
                </div>
                <div class="mt-4">
                    <button type="submit" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">Editar</button>
                </div>
            </div>
        </form>
    </div>
</template>