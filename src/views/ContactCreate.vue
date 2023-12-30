<template>
  <div v-if="contact" class="page">
    <h4>Thêm mới Liên hệ</h4>
    <ContactForm :contact="contact" @submit:contact="createContact" />
    <p>{{ message }}</p>
  </div>
</template>
<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";
export default {
  components: {
    ContactForm,
  },
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      contact: null,
      message: "",
    };
  },
  methods: {
    async create(data) {
      try {
        await ContactService.create(data);
        echo("Liên hệ được cập nhật thành công.");
        this.$router.push({ name: "contactbook" });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getContact(this.id);
    this.message = "";
  },
};
</script>
