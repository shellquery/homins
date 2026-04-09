"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, LayoutGrid, BookX, Settings, Globe, Sun, Moon } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import { useTheme } from "@/lib/theme";

export default function Navbar() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useI18n();
  const { wrongQuestionIds } = useStore();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { href: "/", label: t("home"), icon: Home },
    { href: "/quiz", label: t("startQuiz"), icon: BookOpen },
    { href: "/categories", label: t("categories"), icon: LayoutGrid },
    { href: "/wrong", label: t("wrongBook"), icon: BookX, badge: wrongQuestionIds.length },
    { href: "/settings", label: t("settings"), icon: Settings },
  ];

  return (
    <nav className="sticky top-0 z-50 glass border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow">
              HI
            </div>
            <span className="font-semibold text-lg hidden md:block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                CA Inspector
              </span>
              <span className="text-gray-400 text-sm ml-2">Exam Prep</span>
            </span>
          </Link>

          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-500/15 text-blue-400 shadow-inner"
                      : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
                  }`}
                >
                  <Icon size={18} />
                  <span className="hidden lg:inline">{item.label}</span>
                  {item.badge ? (
                    <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-bold px-1">
                      {item.badge > 99 ? "99+" : item.badge}
                    </span>
                  ) : null}
                </Link>
              );
            })}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-9 h-9 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 transition-all duration-200 ml-1"
              title={theme === "dark" ? "切换白天模式 / Switch to Day Mode" : "切换夜晚模式 / Switch to Night Mode"}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Language Toggle */}
            <button
              onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 transition-all duration-200"
              title={locale === "zh" ? "Switch to English" : "切换中文"}
            >
              <Globe size={18} />
              <span className="hidden sm:inline text-xs">
                {locale === "zh" ? "EN" : "中"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
