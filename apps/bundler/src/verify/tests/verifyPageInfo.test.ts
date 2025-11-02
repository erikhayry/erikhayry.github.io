import {expect, test} from "bun:test";
import {verifyPageInfo} from "../verifyPageInfo.ts";
import {type PageInfo, PageLayout} from "@library/types";

test("should return false if data not compliant", () => {
    expect(verifyPageInfo({})).toBeFalse();
    expect(verifyPageInfo({
        id: "INVALID ID",
        layout: PageLayout.Quad,
    })).toBeFalse();
});

test("should return true if data is compliant", () => {
    const pageInfo: PageInfo = {
        id: "1.1",
        layout: PageLayout.Quad,
    }
    expect(verifyPageInfo(pageInfo)).toBeTruthy();
});
