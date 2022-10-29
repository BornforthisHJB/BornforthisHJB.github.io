import type { PropType, VNode } from "vue";
declare const _default: import("vue").DefineComponent<{
    /**
     * @description Transition type
     */
    type: {
        type: PropType<"group" | "single">;
        default: string;
    };
    /**
     * @description Transition delay
     */
    delay: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description Transition duration
     */
    duration: {
        type: NumberConstructor;
        default: number;
    };
    appear: BooleanConstructor;
}, () => VNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @description Transition type
     */
    type: {
        type: PropType<"group" | "single">;
        default: string;
    };
    /**
     * @description Transition delay
     */
    delay: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description Transition duration
     */
    duration: {
        type: NumberConstructor;
        default: number;
    };
    appear: BooleanConstructor;
}>>, {
    type: "group" | "single";
    duration: number;
    appear: boolean;
    delay: number;
}>;
export default _default;
