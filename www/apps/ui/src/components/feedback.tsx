"use client"

import {
  Feedback as UiFeedback,
  FeedbackProps as UiFeedbackProps,
  formatReportLink,
} from "docs-ui"
import { usePathname } from "next/navigation"
import { absoluteUrl } from "@/lib/absolute-url"
import clsx from "clsx"

export type FeedbackProps = {
  title: string
} & Partial<UiFeedbackProps>

export const Feedback = ({ title, ...props }: FeedbackProps) => {
  const pathname = usePathname()

  return (
    <UiFeedback
      event="survey_ui"
      pathName={absoluteUrl(pathname)}
      reportLink={formatReportLink("UI Docs", title)}
      extraData={{
        section: title,
      }}
      {...props}
      className={clsx("text-ui-fg-subtle", props.className)}
    />
  )
}
