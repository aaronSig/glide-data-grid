import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import {
    BeautifulWrapper,
    Description,
    PropName,
    useMockDataGenerator,
    defaultProps,
} from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";

export default {
    title: "Glide-Data-Grid/DataEditor Demos",

    decorators: [
        (Story: React.ComponentType) => (
            <SimpleThemeWrapper>
                <BeautifulWrapper
                    title="Sections"
                    description={
                        <>
                            <Description>
                                Group rows into sections using the <PropName>sections</PropName> prop. Use{" "}
                                <PropName>sticky</PropName> on a section to keep it pinned while scrolling. Set{" "}
                                <PropName>stickyStyle</PropName> to <PropName>frosted</PropName> for a translucent
                                sticky header.
                            </Description>
                        </>
                    }
                >
                    <Story />
                </BeautifulWrapper>
            </SimpleThemeWrapper>
        ),
    ],
};

export const Sections: React.VFC = () => {
    const { cols, getCellContent } = useMockDataGenerator(10, false);

    return (
        <DataEditor
            {...defaultProps}
            getCellContent={getCellContent}
            verticalBorder={false}
            rowMarkers="none"
            smoothScrollY={true}
            sections={[
                { row: 0, title: "New (24)", sticky: true },
                {
                    row: 24,
                    title: "In work - lots awaiting buyer review, supplier confirmation, and settlement approval (42)",
                    sticky: true,
                    stickyStyle: "frosted",
                    themeOverride: {
                        bgGroupHeader: "#eef7f1",
                        textGroupHeader: "#1f5131",
                        borderColor: "#b9dec6",
                        headerFontStyle: "600 14px",
                    },
                },
                { row: 66, title: "Agreed (33)", sticky: true },
                { row: 99, title: "Archived (18)", sticky: true },
            ]}
            columns={cols}
            rows={400}
        />
    );
};

export const SectionsWithFrozenColumns: React.VFC = () => {
    const { cols, getCellContent } = useMockDataGenerator(10, false);

    return (
        <DataEditor
            {...defaultProps}
            getCellContent={getCellContent}
            freezeColumns={1}
            verticalBorder={false}
            rowMarkers="none"
            smoothScrollY={true}
            sections={[
                {
                    row: 0,
                    title: "Frozen first column - this section title should continue cleanly across the scrollable columns (24)",
                    sticky: true,
                    themeOverride: {
                        bgGroupHeader: "#eef4ff",
                        textGroupHeader: "#1f3763",
                        borderColor: "#b8c9eb",
                        headerFontStyle: "600 14px",
                    },
                },
                { row: 24, title: "In work (42)", sticky: true },
                { row: 66, title: "Agreed (33)", sticky: true },
            ]}
            columns={cols}
            rows={200}
        />
    );
};
