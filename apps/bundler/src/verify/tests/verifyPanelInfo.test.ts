import {expect, test} from "bun:test";
import {verifyPanelInfo} from "../verifyPanelInfo.ts";

test("should return false if data not compliant", () => {
    expect(verifyPanelInfo({})).toBeFalse();
    expect(verifyPanelInfo({
        id: "INVALID ID",
        description: {"en": "DESCRIPTION EN MOCK", "se": "DESCRIPTION SE MOCK",},
    })).toBeFalse();
});

test("should return true if data is compliant", () => {
    expect(verifyPanelInfo({
        id: "1.1.1",
        description: {"en": "DESCRIPTION EN MOCK", "se": "DESCRIPTION SE MOCK",},
    })).toBeTruthy();
});
