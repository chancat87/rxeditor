import { DeleteOutlined, EditOutlined, MoreOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps } from "antd";
import { useToolsTranslate } from "core-react/hooks/useToolsTranslate";
import { memo, useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { NameDialog } from "./NameDialog";

const ListItem = styled.div`
  display: flex;
  align-items: center;
`

export const EditableListItem = memo((
  props: {
    name: string,
    children?: React.ReactNode,
    editTitle: string,
  }
) => {
  const { name, editTitle, children, ...other } = props
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const t = useToolsTranslate()

  const handleMouseEnter = useCallback(() => {
    setHover(true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setHover(false);
  }, []);

  const handleItemClick: MenuProps['onClick'] = ({ key }) => {
    setOpen(false);
    if (key === 'edit') {
      setEditOpen(true)
    } else if (key === "delete") {

    }
  };

  const items: MenuProps['items'] = useMemo(() => [
    {
      key: 'edit',
      label: t("edit"),
      icon: <EditOutlined />,
    },
    {
      key: 'delete',
      label: t("delete"),
      icon: <DeleteOutlined />,
    },
  ], [t]);


  const handleNameCancel = useCallback(()=>{
    setEditOpen(false)
  }, [])

  const handleNameOk = useCallback(()=>{
    setEditOpen(false)
  }, [])

  return (
    <>
      <ListItem
        {...other}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        {
          (hover || open)
            ? <Dropdown menu={{ items, onClick: handleItemClick }} trigger={['click']} onOpenChange={setOpen} >
              <Button size="small" type="text" icon={<MoreOutlined />} style={{ marginLeft: 8 }} />
            </Dropdown>
            : <div style={{ width: 32 }}></div>
        }

      </ListItem>
      <NameDialog
        title={editTitle}
        open={editOpen}
        onCancel={handleNameCancel}
        onOk={handleNameOk}
      />
    </>
  )
})
