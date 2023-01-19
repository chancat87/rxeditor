import { INodeSchema } from "core";
import { IReaction } from "runner/reaction/interfaces/interfaces";
import { IReactionNodeData, ReactionType } from "./metas";

export interface IReactionMaterial {
  //唯一名称
  name: string,
  title: string,
  reactionType: ReactionType,
  icon?: React.ReactNode,
  color?: string,
  reaction?: IReaction,
  schema?: INodeSchema,
  defaultData?: IReactionNodeData,
}