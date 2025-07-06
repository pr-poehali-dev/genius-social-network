import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedChat, setSelectedChat] = useState("general");
  const [message, setMessage] = useState("");

  const chats = [
    {
      id: "general",
      name: "Общий чат",
      type: "channel",
      members: 1250,
      lastMessage: "Привет всем!",
      avatar: "💬",
    },
    {
      id: "tech",
      name: "Разработка",
      type: "channel",
      members: 450,
      lastMessage: "Новая функция готова",
      avatar: "💻",
    },
    {
      id: "design",
      name: "Дизайн",
      type: "channel",
      members: 320,
      lastMessage: "Макеты обновлены",
      avatar: "🎨",
    },
    {
      id: "anna",
      name: "Анна Петрова",
      type: "dm",
      lastMessage: "Увидимся завтра!",
      avatar: "АП",
    },
    {
      id: "team",
      name: "Команда проекта",
      type: "group",
      members: 12,
      lastMessage: "Встреча в 15:00",
      avatar: "👥",
    },
  ];

  const messages = [
    {
      id: 1,
      author: "Алексей",
      time: "14:30",
      text: "Привет! Как дела с проектом?",
      avatar: "АЛ",
    },
    {
      id: 2,
      author: "Мария",
      time: "14:32",
      text: "Все отлично, завтра показываю демо",
      avatar: "МР",
    },
    {
      id: 3,
      author: "Дмитрий",
      time: "14:35",
      text: "Супер! Жду результаты 🚀",
      avatar: "ДМ",
    },
    {
      id: 4,
      author: "Анна",
      time: "14:40",
      text: "Кстати, добавил новые фичи в мессенджер",
      avatar: "АН",
    },
  ];

  const servers = [
    { id: "work", name: "Рабочий сервер", icon: "💼" },
    { id: "friends", name: "Друзья", icon: "👥" },
    { id: "gaming", name: "Игры", icon: "🎮" },
    { id: "music", name: "Музыка", icon: "🎵" },
  ];

  return (
    <div className="min-h-screen bg-[#36393F] text-white flex">
      {/* Боковая панель серверов */}
      <div className="w-[72px] bg-[#202225] flex flex-col items-center py-3 space-y-2">
        <div className="w-12 h-12 bg-[#5865F2] rounded-full flex items-center justify-center mb-2 hover:rounded-2xl transition-all duration-200 cursor-pointer">
          <Icon name="Home" size={24} className="text-white" />
        </div>
        <Separator className="w-8 bg-[#36393F]" />
        {servers.map((server) => (
          <div
            key={server.id}
            className="w-12 h-12 bg-[#36393F] rounded-full flex items-center justify-center hover:rounded-2xl transition-all duration-200 cursor-pointer group hover:bg-[#5865F2]"
          >
            <span className="text-lg">{server.icon}</span>
          </div>
        ))}
        <div className="w-12 h-12 bg-[#36393F] rounded-full flex items-center justify-center hover:rounded-2xl transition-all duration-200 cursor-pointer hover:bg-[#43B581]">
          <Icon name="Plus" size={20} className="text-white" />
        </div>
      </div>

      {/* Список чатов */}
      <div className="w-60 bg-[#2F3136] flex flex-col">
        <div className="h-12 border-b border-[#36393F] flex items-center px-4 shadow-sm">
          <h2 className="font-semibold text-white">Космический чат</h2>
          <Icon
            name="ChevronDown"
            size={16}
            className="ml-auto text-[#B9BBBE]"
          />
        </div>

        <Tabs defaultValue="channels" className="flex-1">
          <TabsList className="grid w-full grid-cols-2 bg-[#2F3136] rounded-none border-b border-[#36393F]">
            <TabsTrigger
              value="channels"
              className="data-[state=active]:bg-[#36393F] data-[state=active]:text-white text-[#B9BBBE]"
            >
              Каналы
            </TabsTrigger>
            <TabsTrigger
              value="messages"
              className="data-[state=active]:bg-[#36393F] data-[state=active]:text-white text-[#B9BBBE]"
            >
              Сообщения
            </TabsTrigger>
          </TabsList>

          <TabsContent value="channels" className="mt-0 flex-1">
            <div className="p-2 space-y-1">
              {chats
                .filter((chat) => chat.type === "channel")
                .map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedChat(chat.id)}
                    className={`flex items-center p-2 rounded cursor-pointer transition-colors ${
                      selectedChat === chat.id
                        ? "bg-[#5865F2] text-white"
                        : "hover:bg-[#36393F] text-[#B9BBBE]"
                    }`}
                  >
                    <div className="w-8 h-8 bg-[#36393F] rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm">{chat.avatar}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{chat.name}</div>
                      <div className="text-xs text-[#72767D] truncate">
                        {chat.lastMessage}
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-[#43B581] text-white"
                    >
                      {chat.members}
                    </Badge>
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="messages" className="mt-0 flex-1">
            <div className="p-2 space-y-1">
              {chats
                .filter((chat) => chat.type === "dm" || chat.type === "group")
                .map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedChat(chat.id)}
                    className={`flex items-center p-2 rounded cursor-pointer transition-colors ${
                      selectedChat === chat.id
                        ? "bg-[#5865F2] text-white"
                        : "hover:bg-[#36393F] text-[#B9BBBE]"
                    }`}
                  >
                    <div className="w-8 h-8 bg-[#36393F] rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-medium">{chat.avatar}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{chat.name}</div>
                      <div className="text-xs text-[#72767D] truncate">
                        {chat.lastMessage}
                      </div>
                    </div>
                    {chat.type === "group" && (
                      <Badge
                        variant="secondary"
                        className="text-xs bg-[#43B581] text-white"
                      >
                        {chat.members}
                      </Badge>
                    )}
                  </div>
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Пользовательская панель */}
        <div className="h-14 bg-[#292B2F] flex items-center px-2">
          <Avatar className="w-8 h-8 mr-2">
            <AvatarFallback className="bg-[#5865F2] text-white text-sm">
              ЮР
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-white truncate">
              Юра Программист
            </div>
            <div className="text-xs text-[#B9BBBE] truncate">🚀 В космосе</div>
          </div>
          <div className="flex space-x-1">
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 hover:bg-[#36393F]"
            >
              <Icon name="Mic" size={16} className="text-[#B9BBBE]" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 hover:bg-[#36393F]"
            >
              <Icon name="Headphones" size={16} className="text-[#B9BBBE]" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 hover:bg-[#36393F]"
            >
              <Icon name="Settings" size={16} className="text-[#B9BBBE]" />
            </Button>
          </div>
        </div>
      </div>

      {/* Основная область чата */}
      <div className="flex-1 flex flex-col">
        {/* Заголовок чата */}
        <div className="h-12 border-b border-[#36393F] flex items-center px-4 bg-[#36393F] shadow-sm">
          <div className="flex items-center">
            <span className="text-lg mr-2">#</span>
            <h3 className="font-semibold text-white">Общий чат</h3>
          </div>
          <div className="ml-auto flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="hover:bg-[#2F3136]">
              <Icon name="Phone" size={16} className="text-[#B9BBBE]" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-[#2F3136]">
              <Icon name="Video" size={16} className="text-[#B9BBBE]" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-[#2F3136]">
              <Icon name="Users" size={16} className="text-[#B9BBBE]" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-[#2F3136]">
              <Icon name="Search" size={16} className="text-[#B9BBBE]" />
            </Button>
          </div>
        </div>

        {/* Область сообщений */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="flex items-start space-x-3 hover:bg-[#32353B] p-2 rounded group"
            >
              <Avatar className="w-10 h-10 flex-shrink-0">
                <AvatarFallback className="bg-[#5865F2] text-white text-sm">
                  {msg.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline space-x-2">
                  <span className="font-medium text-white">{msg.author}</span>
                  <span className="text-xs text-[#72767D]">{msg.time}</span>
                </div>
                <p className="text-[#DCDDDE] mt-1">{msg.text}</p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity flex space-x-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-8 h-8 p-0 hover:bg-[#36393F]"
                >
                  <Icon
                    name="MessageCircle"
                    size={14}
                    className="text-[#B9BBBE]"
                  />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-8 h-8 p-0 hover:bg-[#36393F]"
                >
                  <Icon name="Heart" size={14} className="text-[#B9BBBE]" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Поле ввода сообщения */}
        <div className="p-4">
          <div className="bg-[#40444B] rounded-lg p-3 flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 hover:bg-[#36393F]"
            >
              <Icon name="Plus" size={16} className="text-[#B9BBBE]" />
            </Button>
            <Input
              placeholder="Написать сообщение в #общий-чат"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-transparent border-none text-[#DCDDDE] placeholder-[#72767D] focus:ring-0 focus:border-none"
            />
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="w-8 h-8 p-0 hover:bg-[#36393F]"
              >
                <Icon name="Smile" size={16} className="text-[#B9BBBE]" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-8 h-8 p-0 hover:bg-[#36393F]"
              >
                <Icon name="Paperclip" size={16} className="text-[#B9BBBE]" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-8 h-8 p-0 hover:bg-[#36393F]"
              >
                <Icon name="Mic" size={16} className="text-[#B9BBBE]" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Боковая панель участников */}
      <div className="w-60 bg-[#2F3136] border-l border-[#36393F]">
        <div className="h-12 border-b border-[#36393F] flex items-center px-4">
          <h3 className="font-semibold text-white">Участники — 1,250</h3>
        </div>
        <div className="p-4 space-y-4">
          <div>
            <h4 className="text-xs font-semibold text-[#B9BBBE] uppercase mb-2">
              Онлайн — 342
            </h4>
            <div className="space-y-2">
              {[
                "Юра Программист",
                "Анна Дизайнер",
                "Максим Девопс",
                "Света Тестер",
              ].map((name) => (
                <div
                  key={name}
                  className="flex items-center space-x-2 hover:bg-[#36393F] p-1 rounded cursor-pointer"
                >
                  <div className="relative">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-[#5865F2] text-white text-xs">
                        {name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#43B581] rounded-full border-2 border-[#2F3136]"></div>
                  </div>
                  <span className="text-sm text-[#DCDDDE]">{name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#B9BBBE] uppercase mb-2">
              Не в сети — 908
            </h4>
            <div className="space-y-2">
              {["Алексей Менеджер", "Елена Маркетолог"].map((name) => (
                <div
                  key={name}
                  className="flex items-center space-x-2 hover:bg-[#36393F] p-1 rounded cursor-pointer"
                >
                  <div className="relative">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-[#747F8D] text-white text-xs">
                        {name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#747F8D] rounded-full border-2 border-[#2F3136]"></div>
                  </div>
                  <span className="text-sm text-[#747F8D]">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
