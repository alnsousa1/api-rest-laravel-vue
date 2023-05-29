<script setup>
    import useDevs from "../../composables/devs";
    import { onMounted } from "vue";

    const { devs, getDevs, destroyDev} = useDevs();

    onMounted(() => getDevs());
</script>
<template>
    <div class="mt-12">
        <div class="flex justify-end m-2 p-2">
            <RouterLink :to="{name: 'DevsCreate'}" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">Novo Desenvolvedor</RouterLink>
        </div>

        <div class="relative overflow-x-auto relative">
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
                        <td class="py-4 px-6"></td>
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