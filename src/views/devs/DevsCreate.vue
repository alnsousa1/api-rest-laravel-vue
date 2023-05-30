<script setup>
import { onMounted, reactive } from 'vue';
import useDevs from '../../composables/devs';
import useLevels from '../../composables/levels';
import Swal from 'sweetalert2';

const { storeDev, errors } = useDevs();
const { levels, getLevels, storeLevel } = useLevels();

const form = reactive({
    name: "",
    id_level: "",
    sexo: "",
    data_nascimento: "",
    idade: "",
    hobby: "",
});

const handleSuccess = () => {
  Swal.fire({
    icon: 'success',
    title: 'Cadastro realizado',
    text: 'O desenvolvedor foi cadastrado com sucesso.',
    confirmButtonColor: '#6366F1',
  });
};

const handleSubmit = () => {
  storeDev(form).then(() => {
    handleSuccess();
  });
};

onMounted(() => getLevels());

</script>
<template>
    <div class="mt-12">
        <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="handleSubmit()">
            <div class="space-y-6">
                <div class="mb-6">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nome do
                        desenvolvedor: </label>
                    <input type="text" id="name" v-model="form.name"
                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Digite o nome" required>

                    <label for="id_level" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nível de
                        senioridade</label>
                    <select id="id_level" name="id_level" v-model="form.id_level"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        <option selected disabled value="">Nível de senioridade</option>
                        <option v-for="level in levels" :key="level.id" :value="level.id">{{ level.name }}</option>
                    </select>

                    <label for="sexo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Sexo: </label>
                    <input type="text" id="sexo" v-model="form.sexo"
                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Digite seu sexo" required>

                    <label for="data_nascimento"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nascimento: </label>
                    <input type="date" id="data_nascimento" v-model="form.data_nascimento"
                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required>

                    <label for="idade" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Idade: </label>
                    <input type="number" id="idade" v-model="form.idade"
                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Digite sua idade" required>

                    <label for="hobby" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Hobby: </label>
                    <input type="text" id="hobby" v-model="form.hobby"
                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Digite seu hobby" required>

                </div>
                <div class="mt-4">
                    <button type="submit"
                        class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">Cadastrar</button>
                </div>
            </div>
        </form>
    </div>
</template>