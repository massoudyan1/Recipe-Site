import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

// export interface User {
//   uid: string;
//   email: string;
//   firstName: string;
//   lastName: string;
//   url: string;
//   emailVerified: boolean;
// }
export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
  firstName: string;
  lastName: string;
}
