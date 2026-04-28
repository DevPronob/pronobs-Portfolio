"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      {/* 
        Fix: Removed the nested <Button> component. 
        Styled the DropdownMenuTrigger directly to avoid <button> inside <button>.
      */}
      <DropdownMenuTrigger className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground hover:bg-muted transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="bg-popover border-border">
        <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer">
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer">
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
