import { ref } from "vue";
import axios from 'axios';
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

export default function useLevels() {
        const levels = ref([]);
        const level = ref([]);
        const errors = ref({});
        const router = useRouter();

        const getLevels = async () => {
            const response = await axios.get("levels");
            levels.value = response.data.data;
        };

        const getLevel = async (id) => {
            const response = await axios.get("levels/" + id);
            level.value = response.data.data;
        };

        const storeLevel = async (data) => {
            try {
                await axios.post("levels", data);
                await router.push({ name: "LevelsIndex" });
            } catch (error) {
                if (error.response.status === 422) {
                    errors.value = error.response.data.erros;
                }
            }
        };

        const updateLevel = async (id) => {
            try {
                await axios.put("levels/" + id, level.value);
                await router.push({ name: "LevelsIndex" });
            } catch (error) {
                if (error.response.status === 422) {
                    errors.value = error.response.data.erros;
                }
            }
        };

        const destroyLevel = async(id) => {
            if(!window.confirm("Você tem certeza?")){
                return;
            }
            await axios.delete("levels/" + id);
            await getLevels();
        };
          

        return {
            level,
            levels,
            getLevel,
            getLevels,
            storeLevel,
            updateLevel,
            destroyLevel,
            errors,
        };
}