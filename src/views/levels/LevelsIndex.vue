<script setup>
    import useLevels from "../../composables/levels";
    import { onMounted } from "vue";

    const { levels, getLevels, destroyLevel} = useLevels();

    onMounted(() => getLevels());
</script>
<template>
    <div class="mt-12">
        <div class="flex justify-end m-2 p-2">
            <RouterLink :to="{name: 'LevelsCreate'}" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">Novo Nível</RouterLink>
        </div>

        <div class="relative overflow-x-auto relative">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Nome
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Opções
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="level in levels" :key="level.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="py-4 px-6">{{ level.name }}</td>
                        <td class="py-4 px-6 space-x-2">
                            <RouterLink :to="{name: 'LevelsEdit', params: {id: level.id}}" class="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded">Editar</RouterLink>
                            <button @click="destroyLevel(level.id)" class="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded">
                                Excluir
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>