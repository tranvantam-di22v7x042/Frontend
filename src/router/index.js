import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
import NotFound from "@/views/NotFound.vue";
const routes = [
{
path: "/:pathMatch(.*)*",
name: "notfound",
component: NotFound,
},
{
path: "/",
name: "contactbook",
component: ContactBook,
},
{
path: "/contacts/:id",
name: "contact.edit",
component: () => import("@/views/ContactEdit.vue"),
props: true // Truyền các biến trong $route.params vào làm props
},

{
path: "/contacts/",
name: "contact.create",
component: () => import("@/views/ContactCreate.vue"),
props: true // Truyền các biến trong $route.params vào làm props
},

];
const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes,
});
export default router;