export * from './IRoute';

export type PostOrUpdate = 'Post' | 'Update';

export declare interface IValueLabel<Value = string, Label = string> {
  value: Value;
  label: Label;
};

export declare interface IComponentsOverride<TArg = any, TComp = JSX.Element> {
  [key: string]: (components: TComp[] | TComp, args: TArg) => TComp;
}

export declare interface IClassNamesOverride<T = string> {
  [key: string]: T;
}

/**
 * @description
 * IRole is recieved when calling UserProfile API after success login
 */
export declare interface IRole {
  name: string;
  roleOrganizationId: string;
  roleId: string;
  /** see `roleType` on Roles.ts constant */
  roleType: string;
  academicCareer: string;
  academicCareerDesc: string;
  academicCareerId: string | null;
  academicProgram?: string; // for beelingua
  academicProgramDesc?: string; // for beelingua
  institution: string;
  institutionDesc: string;
  institutionId: string | null;
  isPrimary: boolean;
  userCode: string;
  isActive?: boolean; // this just set locally. this property doesn't exist from return API
  isSuggested?: boolean; // let suggesting user to choose current role to continue proccess
};

export declare interface IRoleCategory {
  name: string;
  roles: IRole[];
};

export declare interface IProfileUser {
  userId: string;
  fullName: string;
  email: string;
  personCode: string;
  userPictureUrl: string;
  categoryList: string[];
  roleCategories: IRoleCategory[];
  activeRoleOrganizationId?: string; // this just set locally. this property doesn't exist from return API
  activeRoleCategoryName?: string; // this just set locally. this property doesn't exist from return API
  activePrivileges?: string[]; // this just set locally. this property doesn't exist from return API
  activeRole?: IRole; // this just set locally. this property doesn't exist from return API
  totalAvailableRoles?: number; // this just set locally. this property doesn't exist from return API
  // this data comes from another API (get app list). This field not return from API UserProfile
  xPPoint?: number; // for beelingua
};


/**
 * data yang disimpan di client / browser saat berhasil login, sebagai pengenal.
 */
export interface IDataLoginAuth {
  token: string;
  name: string;
  id: string;
  avatar: string;
}

/**
 * final interface that stored all important user info that will be used in the entire app
 */
export interface IUserFinalData extends IDataLoginAuth, Omit<IProfileUser, 'fullName' | 'userId' | 'userPictureUrl'> {
  isLoggedIn: boolean;
};

export interface ISideMenuItem {
  title?: boolean;
  attributes?: { hidden?: boolean, disabled?: boolean };
  name: string;
  url?: string;
  icon?: string;
  wrapper?: { // optional wrapper object
    element: string; // required valid HTML5 element tag
    attributes: any; // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
  },
  class?: string; // optional class names space delimited list for title item ex: "text-center"
  badge?: {
    variant: string;
    text: string;
  },
  children?: ISideMenuItem[],
  privilege?: string; // pass user role category if privilege not defined yet (e.g for scoring module)
  isUseRoleCategory: boolean;
  /**
   * only for module accessible by privilege
   */
  modulePrivileges?: string[];

  /**
   * flag for menu that not bounded with privilege
   */
  isMandatoryMenu?: boolean;
};

export interface ISideMenu {
  items: ISideMenuItem[];
};

export interface IPrivilegeUrl {
  /**
   * this field is mandatory if the menu bounded with privilege
   */
  privilege?: string;
  url: string;
  isUseRoleCategory: boolean;

  /**
   * flag for menu that not bounded with privilege
   */
  isMandatoryMenu?: boolean;
}

export declare interface IReturnPrimaryRoleIndex {
  categoryIndex: number;
  roleIndex: number;
}


export interface AuthReducer {
  auth: IUserFinalData;
}

/**
 * @description
 * using [key: string]: any to make this interface useable with getOptionValue in AsyncPaginate component
 * this interface initiated when create manage roles feature
 */
export interface IRoleObject {
  [key: string]: any;
  categoryId: string;
  category: string;
  type: string;
  isDefault: boolean;
  isNotEditable: boolean;
  name: string;
  description: string;
  createdBy: string | null;
  createdDate: string | null;
  createdDateUtc: string | null;
  modifiedBy: string | null;
  modifiedDate: string | null;
  modifiedDateUtc: string | null;
  id: string;
  isBeingPropagated: boolean;
  parentId?: string;
  subRoleType?: string;
  subRoleDescription?: string;
  institutionId?: string;
  institution?: string;
  institutionDesc?: string;
  academicCareerId?: string;
  academicCareer?: string;
  academicCareerDesc?: string;
  academicProgram?: string; // for beelingua
  academicProgramDesc?: string; // for beelingua
};

export interface IManageInstructorTypeObject {
  isDefault: boolean;
  id: string;
  subRoleType: string;
  subRoleDescription: string;
  modifiedDate?: string | null;
  modifiedBy?: string | null;
  isBeingPropagated?: boolean;
};

export interface IManageInstructorTypesPaging {
  data: IManageInstructorTypeObject[];
  totalItem: number;
  totalPage: number;
}

/**
 * @description
 * this interface initiated when create manage roles feature
 */
export interface IRoleCategoryMaster {
  id: string;
  name: string;
  createdBy: string;
  createdDate: string;
  modifiedBy: string;
  modifiedDate: string;
};

export type OrderValue = 'asc' | 'desc';
export type ActiveInactive = 'Active' | 'Inactive';
export type TrueFalse = 'true' | 'false';
export type GenderValue = 'F' | 'M';
export type YesNoValue = 'Y' | 'N';

export interface ColSize {
  lg: number,
  md: number,
  sm: number,
  xs: number;
};

export interface IGroupedOptions<T> {
  label: string;
  options: T[];
};

export interface IRichTextChild {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean
};

export interface IConfigItem {
  createdBy: string | null;
  createdDate: string;
  createdDateUtc: string;
  dateValue: string;
  dateValueUtc: string;
  documentNamespace: string;
  documentType: string;
  id: string;
  isDeleted: boolean;
  modifiedBy: string | null
  modifiedDate: string;
  modifiedDateUtc: string;
  numberValue: number;
  parameterKey: string;
  parameterName: string;
  partitionKey: string;
  stringValues: string[] | null
}

export interface IConfigList {
  continuationToken: string | null;
  items: IConfigItem[];
};

/**
 * basically, all possibilities of the object structures are:
 * [
 *  {
 *    children: [];
 *    type: string;
 *  }
 * ]
 *
 * where the children could be:
 * #1
 * {
 *   children: [];
 *   type: string;
 * }
 *
 * #2
 * {
 *   type: 'text' | undefined
 *   text: string;
 *   bold?: boolean;
 *   italic?: boolean;
 *   underline?: boolean;
 * }
 */
export interface ISlateNode {
  children?: ISlateNode[];
  type?: string;
  text?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

export interface IPrivilegeSystem {
  auth: IUserFinalData;
  alertMessage?: string;
  isDifferentUser?: boolean;
}

export interface IAttachmentObject {
  url: string;
  name: string;
  type: string;
};

export interface IRechartsYAxisClick {
  coordinate: number;
  index: number;
  isShow: boolean;
  offset: number;
  tickCoord: number;
  value: string;
}

export interface IPersistor {
  version: number;
  rehydrated: boolean;
};

export interface IToggelModalChangeRole {
  isOpen?: boolean;

  /** for auto switch role feature */
  isAutoSwitchRole?: boolean;

  /** for auto switch role feature */
  rOId?: string

  /** for auto switch role feature */
  destinationRoute?: string
}

export interface IHandledQueryStringLoginPage {
  sso: string;
  username: string;
  continue: string;
  auth: string;
  role: string;
  acadCareer: string;
  isSSO: string;
  rOId: string;
  redirect: string;
};

export interface ICheckUrlEmbedAbleReturn {
  isAccessible: boolean;
  validUrl: string;
  errorMessage: string;
};

export interface IDiscussionPrivilege {
  isAllowedToCreateNewCommentReply: boolean;
  isAllowedToDeleteCommentReply: boolean;
  isAllowedToEditCommentReply: boolean;
}

/**
 * created to determined privilege access for features
 * in lecturer. Might be won't use for students, thats why
 * using question mark on the field which means the value
 * possible undefined
 */
 export interface ITeachingRole {
  isTeaching?: boolean;
  subRoleTypeId?: string | null;
}

 export interface IObjectAnyValue {
  [key: string]: any;
}

export interface ILMSEnrollmentAttributes {
  attribute: string;
  description: string;
};
