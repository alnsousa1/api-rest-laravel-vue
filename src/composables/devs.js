import { ref } from "vue";
import axios from 'axios';
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

export default function useDevs() {
        const devs = ref([]);
        const dev = ref([]);
        const errors = ref({});
        const router = useRouter();

        const getDevs = async () => {
            const response = await axios.get("devs");
            devs.value = response.data.data;
        };

        const getDev = async (id) => {
            const response = await axios.get("devs/" + id);
            dev.value = response.data.data;
        };

        const storeDev = async (data) => {
            try {
                await axios.post("devs", data);
                await router.push({ name: "DevsIndex" });
            } catch (error) {
                if (error.response.status === 422) {
                    errors.value = error.response.data.errors;
                }
            }
        };

        const updateDev = async (id) => {
            try {
                await axios.put("devs/" + id, dev.value);
                await router.push({ name: "DevsIndex" });
            } catch (error) {
                if (error.response.status === 422) {
                    errors.value = error.response.data.errors;
                }
            }
        };

        const destroyDev = async(id) => {
            if(!window.confirm("Você tem certeza?")){
                return;
            }
            await axios.delete("devs/" + id);
            await getDevs();
        };

        return {
            dev,
            devs,
            getDev,
            getDevs,
            storeDev,
            updateDev,
            destroyDev,
            errors,
        };
}