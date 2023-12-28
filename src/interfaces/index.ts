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

export declare interface IProfileUser {
  userId: string;
  fullName: string;
  email: string;
  personCode: string;
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
  email: string;
}

/**
 * final interface that stored all important user info that will be used in the entire app
 */
// export interface IUserFinalData extends IDataLoginAuth, Omit<IProfileUser, 'fullName' | 'userId' | 'userPictureUrl'> {
//   isLoggedIn: boolean;
// };
export interface IUserFinalData extends IDataLoginAuth, Omit<IProfileUser, 'email'> {
  isLoggedIn: boolean;
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

export type OrderValue = 'asc' | 'desc';
export type ActiveInactive = 'Active' | 'Inactive';
export type TrueFalse = 'true' | 'false';
// export type GenderValue = 'F' | 'M';
// export type YesNoValue = 'Y' | 'N';

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

// export interface IConfigItem {
//   createdBy: string | null;
//   createdDate: string;
//   createdDateUtc: string;
//   dateValue: string;
//   dateValueUtc: string;
//   documentNamespace: string;
//   documentType: string;
//   id: string;
//   isDeleted: boolean;
//   modifiedBy: string | null
//   modifiedDate: string;
//   modifiedDateUtc: string;
//   numberValue: number;
//   parameterKey: string;
//   parameterName: string;
//   partitionKey: string;
//   stringValues: string[] | null
// }

// export interface IConfigList {
//   continuationToken: string | null;
//   items: IConfigItem[];
// };

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

export interface IAttachmentObject {
  url: string;
  name: string;
  type: string;
};

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
