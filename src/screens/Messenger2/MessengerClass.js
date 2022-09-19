
export class MessengerClass {



    twoUsersKey = (String1, String2) => {
        // get first elements

        let S1 = String1.charAt(0);
        let S2 = String2.charAt(0);

        // convert both to ascii

        let S1_Ascii = S1.charCodeAt(0);
        let S2_Ascii = S2.charCodeAt(0);

        // compare number

        var First, Key;
        if (S1_Ascii > S2_Ascii) {
            First = S1_Ascii;
            Key = String1 + String2;
        } else {
            First = S2_Ascii;
            Key = String2 + String1;
        }

        return Key;
    }

    // if group create group id group chat link in database

    // if users create convo id convo link



}