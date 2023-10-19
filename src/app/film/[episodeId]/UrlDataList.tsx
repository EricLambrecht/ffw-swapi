import React, {FunctionComponent, Suspense} from "react";
import {NamedList, NamedListProps} from "@/app/film/[episodeId]/NamedList";
import { Character } from "@/src/swapiTypes";

type ItemWithUrl = {
  url: string
}

type RenderFunction<T> = (item: T) => React.ReactNode;

interface Props<T extends ItemWithUrl> extends NamedListProps {
  urlList: string[]
  render: RenderFunction<T>
}

interface ItemProps<T extends ItemWithUrl> {
  url: string
  render: RenderFunction<T>
}

async function getData<T extends ItemWithUrl>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json();
}

async function ListItem<T extends ItemWithUrl>({ url, render }: ItemProps<T>){
  const item = await getData<T>(url)
  return <li>{render(item)}</li>;
}

export function UrlDataList<T extends ItemWithUrl>({ urlList, render, title }: Props<T>) {
  return (
    <NamedList title={title}>
      {urlList.map(url => (
        <Suspense key={url} fallback={<li>…</li>}>
          <ListItem url={url} render={render} />
        </Suspense>
      ))}
    </NamedList>
  )
}