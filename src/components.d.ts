/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { NavItem } from "./components/app-nav/nav-item";
import { Profile, User } from "./user";
export namespace Components {
    interface AppContactInfo {
    }
    interface AppHeader {
    }
    interface AppHeaderNav {
    }
    interface AppHome {
    }
    interface AppIam {
        "name": string;
    }
    interface AppMain {
    }
    interface AppNav {
        "items": NavItem[];
        "selectedItem"?: NavItem;
    }
    interface AppNavItem {
        "isSelected": boolean;
        "item": NavItem;
    }
    interface AppRoot {
    }
    interface AppUserContent {
        "selectedItem": NavItem;
        "user": User;
    }
    interface AppUserHeader {
        "user": User;
    }
    interface AppUserList {
        "items": string[];
    }
    interface AppUserNav {
        "user": User;
    }
    interface AppUserPhoto {
        "photo": string;
    }
    interface AppUserProfile {
        "profile": Profile;
    }
}
declare global {
    interface HTMLAppContactInfoElement extends Components.AppContactInfo, HTMLStencilElement {
    }
    var HTMLAppContactInfoElement: {
        prototype: HTMLAppContactInfoElement;
        new (): HTMLAppContactInfoElement;
    };
    interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {
    }
    var HTMLAppHeaderElement: {
        prototype: HTMLAppHeaderElement;
        new (): HTMLAppHeaderElement;
    };
    interface HTMLAppHeaderNavElement extends Components.AppHeaderNav, HTMLStencilElement {
    }
    var HTMLAppHeaderNavElement: {
        prototype: HTMLAppHeaderNavElement;
        new (): HTMLAppHeaderNavElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppIamElement extends Components.AppIam, HTMLStencilElement {
    }
    var HTMLAppIamElement: {
        prototype: HTMLAppIamElement;
        new (): HTMLAppIamElement;
    };
    interface HTMLAppMainElement extends Components.AppMain, HTMLStencilElement {
    }
    var HTMLAppMainElement: {
        prototype: HTMLAppMainElement;
        new (): HTMLAppMainElement;
    };
    interface HTMLAppNavElement extends Components.AppNav, HTMLStencilElement {
    }
    var HTMLAppNavElement: {
        prototype: HTMLAppNavElement;
        new (): HTMLAppNavElement;
    };
    interface HTMLAppNavItemElement extends Components.AppNavItem, HTMLStencilElement {
    }
    var HTMLAppNavItemElement: {
        prototype: HTMLAppNavItemElement;
        new (): HTMLAppNavItemElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppUserContentElement extends Components.AppUserContent, HTMLStencilElement {
    }
    var HTMLAppUserContentElement: {
        prototype: HTMLAppUserContentElement;
        new (): HTMLAppUserContentElement;
    };
    interface HTMLAppUserHeaderElement extends Components.AppUserHeader, HTMLStencilElement {
    }
    var HTMLAppUserHeaderElement: {
        prototype: HTMLAppUserHeaderElement;
        new (): HTMLAppUserHeaderElement;
    };
    interface HTMLAppUserListElement extends Components.AppUserList, HTMLStencilElement {
    }
    var HTMLAppUserListElement: {
        prototype: HTMLAppUserListElement;
        new (): HTMLAppUserListElement;
    };
    interface HTMLAppUserNavElement extends Components.AppUserNav, HTMLStencilElement {
    }
    var HTMLAppUserNavElement: {
        prototype: HTMLAppUserNavElement;
        new (): HTMLAppUserNavElement;
    };
    interface HTMLAppUserPhotoElement extends Components.AppUserPhoto, HTMLStencilElement {
    }
    var HTMLAppUserPhotoElement: {
        prototype: HTMLAppUserPhotoElement;
        new (): HTMLAppUserPhotoElement;
    };
    interface HTMLAppUserProfileElement extends Components.AppUserProfile, HTMLStencilElement {
    }
    var HTMLAppUserProfileElement: {
        prototype: HTMLAppUserProfileElement;
        new (): HTMLAppUserProfileElement;
    };
    interface HTMLElementTagNameMap {
        "app-contact-info": HTMLAppContactInfoElement;
        "app-header": HTMLAppHeaderElement;
        "app-header-nav": HTMLAppHeaderNavElement;
        "app-home": HTMLAppHomeElement;
        "app-iam": HTMLAppIamElement;
        "app-main": HTMLAppMainElement;
        "app-nav": HTMLAppNavElement;
        "app-nav-item": HTMLAppNavItemElement;
        "app-root": HTMLAppRootElement;
        "app-user-content": HTMLAppUserContentElement;
        "app-user-header": HTMLAppUserHeaderElement;
        "app-user-list": HTMLAppUserListElement;
        "app-user-nav": HTMLAppUserNavElement;
        "app-user-photo": HTMLAppUserPhotoElement;
        "app-user-profile": HTMLAppUserProfileElement;
    }
}
declare namespace LocalJSX {
    interface AppContactInfo {
    }
    interface AppHeader {
    }
    interface AppHeaderNav {
    }
    interface AppHome {
    }
    interface AppIam {
        "name"?: string;
    }
    interface AppMain {
    }
    interface AppNav {
        "items"?: NavItem[];
        "onItemClick"?: (event: CustomEvent<NavItem>) => void;
        "selectedItem"?: NavItem;
    }
    interface AppNavItem {
        "isSelected"?: boolean;
        "item"?: NavItem;
        "onItemClick"?: (event: CustomEvent<NavItem>) => void;
    }
    interface AppRoot {
    }
    interface AppUserContent {
        "selectedItem"?: NavItem;
        "user"?: User;
    }
    interface AppUserHeader {
        "user"?: User;
    }
    interface AppUserList {
        "items"?: string[];
    }
    interface AppUserNav {
        "user"?: User;
    }
    interface AppUserPhoto {
        "photo"?: string;
    }
    interface AppUserProfile {
        "profile"?: Profile;
    }
    interface IntrinsicElements {
        "app-contact-info": AppContactInfo;
        "app-header": AppHeader;
        "app-header-nav": AppHeaderNav;
        "app-home": AppHome;
        "app-iam": AppIam;
        "app-main": AppMain;
        "app-nav": AppNav;
        "app-nav-item": AppNavItem;
        "app-root": AppRoot;
        "app-user-content": AppUserContent;
        "app-user-header": AppUserHeader;
        "app-user-list": AppUserList;
        "app-user-nav": AppUserNav;
        "app-user-photo": AppUserPhoto;
        "app-user-profile": AppUserProfile;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-contact-info": LocalJSX.AppContactInfo & JSXBase.HTMLAttributes<HTMLAppContactInfoElement>;
            "app-header": LocalJSX.AppHeader & JSXBase.HTMLAttributes<HTMLAppHeaderElement>;
            "app-header-nav": LocalJSX.AppHeaderNav & JSXBase.HTMLAttributes<HTMLAppHeaderNavElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-iam": LocalJSX.AppIam & JSXBase.HTMLAttributes<HTMLAppIamElement>;
            "app-main": LocalJSX.AppMain & JSXBase.HTMLAttributes<HTMLAppMainElement>;
            "app-nav": LocalJSX.AppNav & JSXBase.HTMLAttributes<HTMLAppNavElement>;
            "app-nav-item": LocalJSX.AppNavItem & JSXBase.HTMLAttributes<HTMLAppNavItemElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-user-content": LocalJSX.AppUserContent & JSXBase.HTMLAttributes<HTMLAppUserContentElement>;
            "app-user-header": LocalJSX.AppUserHeader & JSXBase.HTMLAttributes<HTMLAppUserHeaderElement>;
            "app-user-list": LocalJSX.AppUserList & JSXBase.HTMLAttributes<HTMLAppUserListElement>;
            "app-user-nav": LocalJSX.AppUserNav & JSXBase.HTMLAttributes<HTMLAppUserNavElement>;
            "app-user-photo": LocalJSX.AppUserPhoto & JSXBase.HTMLAttributes<HTMLAppUserPhotoElement>;
            "app-user-profile": LocalJSX.AppUserProfile & JSXBase.HTMLAttributes<HTMLAppUserProfileElement>;
        }
    }
}
