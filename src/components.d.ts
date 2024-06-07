/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { CvEntry, Engineering, Focus, Profile, User } from "./user";
import { ModalImage } from "./components/image-modal/modal-image";
import { Item } from "./components/nav/nav-item";
export namespace Components {
    interface MeContactInfo {
        "email": string;
        "linkedInUser": string;
        "location": string;
        "phone": string;
    }
    interface MeCvSection {
        "entries": CvEntry[];
        "name": string;
    }
    interface MeHome {
    }
    interface MeIam {
        "name": string;
        "professionTitle": string;
    }
    interface MeImageModal {
        "modalImage": ModalImage | undefined;
        "size": number | undefined;
    }
    interface MeMain {
    }
    interface MeNav {
        "items": Item[];
        "selectedItem"?: Item;
    }
    interface MeNavItem {
        "isSelected": boolean;
        "item": Item;
    }
    interface MeRoot {
    }
    interface MeUserContent {
        "selectedItem": Item;
        "user": User;
    }
    interface MeUserEngineering {
        "engineering": Engineering;
    }
    interface MeUserFocus {
        "userFocus": Focus;
    }
    interface MeUserList {
        "items": string[];
    }
    interface MeUserNav {
        "user": User;
    }
    interface MeUserPhoto {
        "photo": string;
    }
    interface MeUserProfile {
        "profile": Profile;
    }
}
declare global {
    interface HTMLMeContactInfoElement extends Components.MeContactInfo, HTMLStencilElement {
    }
    var HTMLMeContactInfoElement: {
        prototype: HTMLMeContactInfoElement;
        new (): HTMLMeContactInfoElement;
    };
    interface HTMLMeCvSectionElement extends Components.MeCvSection, HTMLStencilElement {
    }
    var HTMLMeCvSectionElement: {
        prototype: HTMLMeCvSectionElement;
        new (): HTMLMeCvSectionElement;
    };
    interface HTMLMeHomeElement extends Components.MeHome, HTMLStencilElement {
    }
    var HTMLMeHomeElement: {
        prototype: HTMLMeHomeElement;
        new (): HTMLMeHomeElement;
    };
    interface HTMLMeIamElement extends Components.MeIam, HTMLStencilElement {
    }
    var HTMLMeIamElement: {
        prototype: HTMLMeIamElement;
        new (): HTMLMeIamElement;
    };
    interface HTMLMeImageModalElement extends Components.MeImageModal, HTMLStencilElement {
    }
    var HTMLMeImageModalElement: {
        prototype: HTMLMeImageModalElement;
        new (): HTMLMeImageModalElement;
    };
    interface HTMLMeMainElement extends Components.MeMain, HTMLStencilElement {
    }
    var HTMLMeMainElement: {
        prototype: HTMLMeMainElement;
        new (): HTMLMeMainElement;
    };
    interface HTMLMeNavElement extends Components.MeNav, HTMLStencilElement {
    }
    var HTMLMeNavElement: {
        prototype: HTMLMeNavElement;
        new (): HTMLMeNavElement;
    };
    interface HTMLMeNavItemElement extends Components.MeNavItem, HTMLStencilElement {
    }
    var HTMLMeNavItemElement: {
        prototype: HTMLMeNavItemElement;
        new (): HTMLMeNavItemElement;
    };
    interface HTMLMeRootElement extends Components.MeRoot, HTMLStencilElement {
    }
    var HTMLMeRootElement: {
        prototype: HTMLMeRootElement;
        new (): HTMLMeRootElement;
    };
    interface HTMLMeUserContentElement extends Components.MeUserContent, HTMLStencilElement {
    }
    var HTMLMeUserContentElement: {
        prototype: HTMLMeUserContentElement;
        new (): HTMLMeUserContentElement;
    };
    interface HTMLMeUserEngineeringElement extends Components.MeUserEngineering, HTMLStencilElement {
    }
    var HTMLMeUserEngineeringElement: {
        prototype: HTMLMeUserEngineeringElement;
        new (): HTMLMeUserEngineeringElement;
    };
    interface HTMLMeUserFocusElement extends Components.MeUserFocus, HTMLStencilElement {
    }
    var HTMLMeUserFocusElement: {
        prototype: HTMLMeUserFocusElement;
        new (): HTMLMeUserFocusElement;
    };
    interface HTMLMeUserListElement extends Components.MeUserList, HTMLStencilElement {
    }
    var HTMLMeUserListElement: {
        prototype: HTMLMeUserListElement;
        new (): HTMLMeUserListElement;
    };
    interface HTMLMeUserNavElement extends Components.MeUserNav, HTMLStencilElement {
    }
    var HTMLMeUserNavElement: {
        prototype: HTMLMeUserNavElement;
        new (): HTMLMeUserNavElement;
    };
    interface HTMLMeUserPhotoElement extends Components.MeUserPhoto, HTMLStencilElement {
    }
    var HTMLMeUserPhotoElement: {
        prototype: HTMLMeUserPhotoElement;
        new (): HTMLMeUserPhotoElement;
    };
    interface HTMLMeUserProfileElement extends Components.MeUserProfile, HTMLStencilElement {
    }
    var HTMLMeUserProfileElement: {
        prototype: HTMLMeUserProfileElement;
        new (): HTMLMeUserProfileElement;
    };
    interface HTMLElementTagNameMap {
        "me-contact-info": HTMLMeContactInfoElement;
        "me-cv-section": HTMLMeCvSectionElement;
        "me-home": HTMLMeHomeElement;
        "me-iam": HTMLMeIamElement;
        "me-image-modal": HTMLMeImageModalElement;
        "me-main": HTMLMeMainElement;
        "me-nav": HTMLMeNavElement;
        "me-nav-item": HTMLMeNavItemElement;
        "me-root": HTMLMeRootElement;
        "me-user-content": HTMLMeUserContentElement;
        "me-user-engineering": HTMLMeUserEngineeringElement;
        "me-user-focus": HTMLMeUserFocusElement;
        "me-user-list": HTMLMeUserListElement;
        "me-user-nav": HTMLMeUserNavElement;
        "me-user-photo": HTMLMeUserPhotoElement;
        "me-user-profile": HTMLMeUserProfileElement;
    }
}
declare namespace LocalJSX {
    interface MeContactInfo {
        "email"?: string;
        "linkedInUser"?: string;
        "location"?: string;
        "phone"?: string;
    }
    interface MeCvSection {
        "entries"?: CvEntry[];
        "name"?: string;
    }
    interface MeHome {
    }
    interface MeIam {
        "name"?: string;
        "professionTitle"?: string;
    }
    interface MeImageModal {
        "modalImage"?: ModalImage | undefined;
        "onClose"?: (event: CustomEvent<void>) => void;
        "onNext"?: (event: CustomEvent<ModalImage>) => void;
        "onPrevious"?: (event: CustomEvent<ModalImage>) => void;
        "size"?: number | undefined;
    }
    interface MeMain {
    }
    interface MeNav {
        "items"?: Item[];
        "onItemClick"?: (event: CustomEvent<Item>) => void;
        "selectedItem"?: Item;
    }
    interface MeNavItem {
        "isSelected"?: boolean;
        "item"?: Item;
        "onItemClick"?: (event: CustomEvent<Item>) => void;
    }
    interface MeRoot {
    }
    interface MeUserContent {
        "selectedItem"?: Item;
        "user"?: User;
    }
    interface MeUserEngineering {
        "engineering"?: Engineering;
    }
    interface MeUserFocus {
        "userFocus"?: Focus;
    }
    interface MeUserList {
        "items"?: string[];
    }
    interface MeUserNav {
        "user"?: User;
    }
    interface MeUserPhoto {
        "photo"?: string;
    }
    interface MeUserProfile {
        "profile"?: Profile;
    }
    interface IntrinsicElements {
        "me-contact-info": MeContactInfo;
        "me-cv-section": MeCvSection;
        "me-home": MeHome;
        "me-iam": MeIam;
        "me-image-modal": MeImageModal;
        "me-main": MeMain;
        "me-nav": MeNav;
        "me-nav-item": MeNavItem;
        "me-root": MeRoot;
        "me-user-content": MeUserContent;
        "me-user-engineering": MeUserEngineering;
        "me-user-focus": MeUserFocus;
        "me-user-list": MeUserList;
        "me-user-nav": MeUserNav;
        "me-user-photo": MeUserPhoto;
        "me-user-profile": MeUserProfile;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "me-contact-info": LocalJSX.MeContactInfo & JSXBase.HTMLAttributes<HTMLMeContactInfoElement>;
            "me-cv-section": LocalJSX.MeCvSection & JSXBase.HTMLAttributes<HTMLMeCvSectionElement>;
            "me-home": LocalJSX.MeHome & JSXBase.HTMLAttributes<HTMLMeHomeElement>;
            "me-iam": LocalJSX.MeIam & JSXBase.HTMLAttributes<HTMLMeIamElement>;
            "me-image-modal": LocalJSX.MeImageModal & JSXBase.HTMLAttributes<HTMLMeImageModalElement>;
            "me-main": LocalJSX.MeMain & JSXBase.HTMLAttributes<HTMLMeMainElement>;
            "me-nav": LocalJSX.MeNav & JSXBase.HTMLAttributes<HTMLMeNavElement>;
            "me-nav-item": LocalJSX.MeNavItem & JSXBase.HTMLAttributes<HTMLMeNavItemElement>;
            "me-root": LocalJSX.MeRoot & JSXBase.HTMLAttributes<HTMLMeRootElement>;
            "me-user-content": LocalJSX.MeUserContent & JSXBase.HTMLAttributes<HTMLMeUserContentElement>;
            "me-user-engineering": LocalJSX.MeUserEngineering & JSXBase.HTMLAttributes<HTMLMeUserEngineeringElement>;
            "me-user-focus": LocalJSX.MeUserFocus & JSXBase.HTMLAttributes<HTMLMeUserFocusElement>;
            "me-user-list": LocalJSX.MeUserList & JSXBase.HTMLAttributes<HTMLMeUserListElement>;
            "me-user-nav": LocalJSX.MeUserNav & JSXBase.HTMLAttributes<HTMLMeUserNavElement>;
            "me-user-photo": LocalJSX.MeUserPhoto & JSXBase.HTMLAttributes<HTMLMeUserPhotoElement>;
            "me-user-profile": LocalJSX.MeUserProfile & JSXBase.HTMLAttributes<HTMLMeUserProfileElement>;
        }
    }
}
