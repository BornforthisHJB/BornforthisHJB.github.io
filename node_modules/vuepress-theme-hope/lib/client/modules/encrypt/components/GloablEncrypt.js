import { defineComponent, h } from "vue";
import PasswordModal from "@theme-hope/modules/encrypt/components/PasswordModal.js";
import { useGlobalEcrypt } from "@theme-hope/modules/encrypt/composables/index.js";
export default defineComponent({
    name: "GlobalEncrypt",
    setup(_props, { slots }) {
        const { isGlobalEncrypted, validateGlobalToken } = useGlobalEcrypt();
        return () => isGlobalEncrypted.value
            ? h(PasswordModal, { full: true, onVerify: validateGlobalToken })
            : (slots["default"]?.() || null);
    },
});
//# sourceMappingURL=GloablEncrypt.js.map