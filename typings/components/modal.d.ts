export default class Modal {
    static current: any;
    isOpening: boolean;
    static isClosingModal: boolean;
    url: string;
    modalOptions: any;
    constructor(event?: JQueryEventObject, targeturl?: string, opt?: any);
    static enalbeEnsureHeight(selector: JQuery): void;
    static initialize(): void;
    static setIFrameHeight(arg: any): void;
    open(): boolean;
    static closeMe(): boolean;
    static close(): boolean;
    getModalTemplate(options: any): string;
    static ensureHeight(): void;
    static adjustHeight(overflow?: number): void;
    static expandToFitPicker(target: any): void;
    static ensureNonModal(): void;
}
