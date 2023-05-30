<script setup>
    import useDevs from "../../composables/devs";
    import useLevels from "../../composables/levels";
    import { onMounted } from "vue";

    const { devs, getDevs, destroyDev} = useDevs();
    const {levels, getLevels} = useLevels();

    onMounted(() => getDevs());
    onMounted(() => getLevels());
</script>
<template>
    <div class="mt-12">
        <div class="flex justify-end m-2 p-2">
            <RouterLink :to="{name: 'DevsCreate'}" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">Novo Desenvolvedor</RouterLink>
        </div>

        <div class="relative overflow-x-auto relative">
             <label for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="flex justify-end">
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <input type="search" id="default-search"
                            class="mb-1 w-60 p-2 pl-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                            placeholder="Pesquisar" required>
                        <button type="submit"
                            class="text-white absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-500">Pesquisar</button>
                    </div>
                </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Nome
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nível
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Opções
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="dev in devs" :key="dev.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="py-4 px-6">{{ dev.name }}</td>
                        <td class="py-4 px-6">{{ dev.id_level }}</td>
                        <td class="py-4 px-6 space-x-2">
                            <RouterLink :to="{name: 'DevsEdit', params:{id: dev.id}}" class="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded">Editar</RouterLink>
                            <button @click="destroyDev(dev.id)" class="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded">
                                Excluir
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>