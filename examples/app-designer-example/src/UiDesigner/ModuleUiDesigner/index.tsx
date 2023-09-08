import { EditorScope } from "@rxdrag/react-antd-shell"
import { memo } from "react"
import { ModuleUiDesignerInner } from "./ModuleUiDesignerInner"
import { setterLocales, minionsMaterialCategories, minionsLocales, controllerDefines, materials } from "example-common"
import { DeviceType, ThemeMode } from "../../interfaces"

export const ModuleUiDesigner = memo((
  props: {
    device: DeviceType,
    canvasUrl: string,
    previewUrl: string,
    themeMode?: ThemeMode,
  }
) => {
  const { device, canvasUrl, previewUrl, themeMode } = props;
  return (
    <EditorScope
      locales={setterLocales}
      canvasUrl={canvasUrl}
      previewUrl={previewUrl}
      themeMode={themeMode}
      minionOptions={{
        materials: minionsMaterialCategories,
        locales: minionsLocales,
        controllers: controllerDefines,
      }}

      materials={materials}
    >
      <ModuleUiDesignerInner />
    </EditorScope>
  )
})