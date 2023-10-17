---
title: Обзор функций
sidebar_position: 1
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note Дисклеймер

AdGuard для Android не следует путать с Блокировщиком контента AdGuard. Блокировщик контента AdGuard — это приложение, представленное в Google Play. Он подчиняется политике Google, вследствие чего его функциональность ограничена. AdGuard для Android — это, напротив, мощное приложение, которое позволяет блокировать рекламу, управлять другими приложениями и выполнять другие функции, описанные в этой статье. AdGuard для Android можно скачать только [на сайте AdGuard](https://adguard.com/adguard-android/overview.html).

:::

## Защита

На этом экране собраны все функции защиты AdGuard:

- Блокировка рекламы
- Защита от трекинга
- Блокировка раздражителей
- DNS-защита
- Фаервол
- Антифишинг
- Интеграция с AdGuard VPN

Подробнее о каждой функции ниже.

### Блокировка рекламы

Эта функция блокирует рекламу, применяя фильтры для блокировки рекламы и языковые фильтры. О механизме блокировки рекламы можно узнать [из посвящённой ему статьи](/general/ad-filtering/how-ad-blocking-works).

Базовая защита эффективно блокирует рекламу на большинстве сайтов. Чтобы настроить блокировку рекламы, вы можете:

- Включить соответствующие языковые фильтры — они содержат правила фильтрации для блокировки рекламы на сайтах на определённых языках

- Добавить сайты в белый список — они не будут фильтроваться AdGuard

- Создавать пользовательские правила — AdGuard будет применять их на указанных сайтах [Узнайте, как создавать свои фильтры](/general/ad-filtering/create-own-filters)

![Блокировка рекламы *mobile_border](https://cdn.adtidy.org/blog/new/o44x5ad_blocking.png)

### Защита от трекинга

*Защита от трекинга* (ранее *Антитрекинг*) не позволяет веб-сайтам собирать информацию о вас, такую как ваш IP-адрес, информацию о вашем браузере, операционной системе, разрешении экрана и странице, с которой вы пришли или были перенаправлены. Также эта функция может блокировать куки-файлы, которые сайты используют для маркировки браузера, сохранения ваших личных настроек и пользовательских предпочтений, или для того, чтобы узнать вас при следующем посещении.

![Защита от трекинга *mobile_border](https://cdn.adtidy.org/blog/new/y5fuztracking_protection.png)

Есть три предварительно настроенных уровня защиты. Они включают следующие функции:

 1. **Стандартный**

    a. *Блокировка трекеров*. Этот параметр защищает от онлайн-счётчиков и инструментов веб-аналитики с помощью Фильтра счётчиков и систем аналитики AdGuard

    b. *Запрос на прекращение отслеживания*. This setting sends the [Global Privacy Control](https://globalprivacycontrol.org/) and [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) signals to the websites you visit, asking web apps to disable tracking of your activity

    c. *Удаление заголовка X-Client-Data*. Даннная настройка предотвращает отправку информации о версии и модификации Google Chrome на домены Google (включая DoubleClick и Google Analytics)

 2. **Высокий**

    a. *Блокировка трекеров*

    b. *Удаление параметров отслеживания из URL-адресов*. Этот параметр удаляет параметры отслеживания, такие как `utm_*` и `fb_ref`, из URL-адресов страниц с помощью Фильтра отслеживания по URL

    c. *Скрытие поисковых запросов*

    d. *Запрос на прекращение отслеживания*

    е. *Самоуничтожение сторонних куки-файлов*. Этот параметр ограничивает время жизни сторонних куки-файлов до 180 минут

    :::caution

    Эта настройка удаляет все сторонние куки-файлы, включая информацию о ваших логинах в социальных сетях или других сторонних сервисах. Возможно, вам придётся периодически повторно вводить логин и пароль на некоторых сайтах и сталкиваться с другими проблемами, связанными с куки. Чтобы блокировать только отслеживающие куки-файлы, используйте *Стандартный* уровень защиты.


:::

    f. *Удаление заголовка X-Client-Data*

 3. **Максимальный**

    a. *Блокировка трекеров*

    b. *Удаление параметров отслеживания из URL-адресов*

    c. *Скрытие поисковых запросов*

    d. *Запрос на прекращение отслеживания*

    е. *Самоуничтожение сторонних куки-файлов*

    f. *Блокировка WebRTC*. This setting blocks WebRTC, a technology that allows direct streaming of data between browsers and apps and can let others know your true IP address, even if you use a proxy or VPN

    g. *Блокировка Push API*. Этот параметр запрещает сайтам отправлять вам уведомления независимо от статуса активности вашего браузера

    h. *Блокировка Location API*. Эта настройка не позволяет браузерам обнаруживать ваши GPS-данные

    i. *Скрытие Referrer от сторонних ресурсов*. Этот параметр скрывает HTTP-заголовок, содержащий URL-адрес начальной страницы, и заменяет его на значение по умолчанию или указанное. Вы можете настроить свой собственный реферер в соответствующем поле

    j. *Скрытие User-Agent*. Эта настройка удаляет из заголовка User-Agent идентифицирующую информацию, которая обычно включает имя и версию браузера, операционную систему и языковые настройки

    k. *Удаление заголовка X-Client-Data*

Вы можете настроить защиту от отслеживания, выбрав *Пользовательский* уровень защиты. [Learn more about other Tracking protection settings](/general/stealth-mode)

### Блокировка раздражителей

В основе этой функции лежит Фильтр раздражителей AdGuard, который позволяет блокировать попапы, окна онлайн-ассистентов, куки-уведомления, запросы на загрузку мобильных приложений и прочие раздражители. [Узнайте больше о фильтрах раздражителей](/general/ad-filtering/adguard-filters/#adguard-filters)

![Блокировка раздражителей *mobile_border](https://cdn.adtidy.org/blog/new/lwujvannoyance.png)

### DNS-защита

*DNS-защита* позволяет фильтровать DNS-запросы с помощью выбранного DNS-сервера, DNS-фильтров и пользовательских правил:

- Некоторые DNS-серверы располагают чёрными списками, которые помогают блокировать DNS-запросы к потенциально опасным доменам

- В дополнение к DNS-серверам, AdGuard может самостоятельно фильтровать DNS-запросы с помощью специального DNS-фильтра. Он содержит большой список рекламных и трекинговых доменов — запросы к ним перенаправляются на сервер blackhole

- Вы также можете блокировать и разблокировать домены, создавая пользовательские правила. Возможно, вам потребуется ознакомиться с нашей статьёй о [синтаксисе правил DNS-фильтрации](https://adguard-dns.io/kb/general/dns-filtering-syntax/)

![DNS-защита *mobile_border](https://cdn.adtidy.org/blog/new/u8qtxdns_protection.png)

#### DNS-сервер

В этом разделе вы можете выбрать DNS-сервер для разрешения DNS-запросов, блокировки рекламы и трекеров, а также шифрования DNS-трафика. Нажмите на сервер, чтобы увидеть его полное описание и выбрать протокол. Если вы не нашли нужный сервер, его можно добавить вручную:

- Нажмите *Добавить DNS-сервер* и введите адрес (или адреса) сервера

- Также можно выбрать DNS-сервер из [списка известных DNS-провайдеров](https://adguard-dns.io/kb/general/dns-providers/) и нажать кнопку *Добавить в AdGuard* рядом с ним

- Если вы используете приватный сервер AdGuard DNS, вы можете добавить его в AdGuard с [панели управления](https://adguard-dns.io/dashboard/)

 По умолчанию выбран *Автоматический DNS*. Он устанавливает DNS-сервер на основе настроек AdGuard и вашего устройства. If you have integration with AdGuard VPN or another SOCKS5 proxy enabled, it connects to *AdGuard DNS Non-filtering* or any other server you specify. Во всех остальных случаях он подключается к DNS-серверу, выбранному в настройках вашего устройства.

#### DNS-фильтры

В этом разделе вы можете добавлять собственные DNS-фильтры и правила DNS-фильтрации. Фильтры можно найти на сайте [filterlists.com](https://filterlists.com/).

### Фаервол

Эта функция помогает управлять доступом в интернет для определённых приложений, установленных на вашем устройстве, и для устройства в целом.

![Фаервол *mobile_border](https://cdn.adtidy.org/blog/new/gdn94firewall.png)

#### Глобальные правила Фаервола

Этот раздел позволяет контролировать доступ в интернет для всего устройства.

![Глобальные правила Фаервола *mobile_border](https://cdn.adtidy.org/blog/new/4zx2nhglobal_rules.png)

Эти правила применяются ко всем приложениям на устройстве, если для них не установлены собственные правила.

#### Пользовательские правила Фаервола

В этом разделе вы можете контролировать доступ в интернет для конкретных приложений — блокировать те, которые вы не считаете надёжными, или, наоборот, разблокировать те, которые хотите использовать, несмотря на глобальные правила Фаервола.

1. Open *Custom firewall rules*. В разделе *Приложения с пользовательскими правилами* нажмите *Добавить приложение*.

    ![Пользовательские правила Фаервола *mobile_border](https://cdn.adtidy.org/blog/new/qkxpecustom_rules.png)

1. Выберите приложение, для которого вы хотите установить индивидуальные правила.

    ![Добавление приложения в пользовательские правила Фаервола *mobile_border](https://cdn.adtidy.org/blog/new/2db47fadding_app.png)

1. В *Доступных пользовательских правилах* выберите те, которые вы хотите настроить, и нажмите «+». Теперь правила будут отображаться в разделе *Применяемые пользовательские правила*.

    ![Добавленное правило *mobile_border](https://cdn.adtidy.org/blog/new/6fzjladded_rule.png)

1. Если вам нужно заблокировать определённый тип соединения, переведите переключатель влево. Если вы хотите разрешить его, оставьте переключатель включённым. Пользовательские правила отменяют глобальные: любые изменения, внесённые в *глобальные правила фаервола*, не повлияют на данное приложение.

Чтобы удалить правило или приложение из *Пользовательских правил*, проведите по нему влево.

### Быстрые действия

*Быстрые действия* основаны на запросах из *Недавней активности* (которую можно найти в *Статистике*). В этом разделе показано, какие приложения недавно подключались к интернету.

![Быстрые действия *mobile_border](https://cdn.adtidy.org/blog/new/yigrfquick_actions.png)

If you see an app that shouldn't be using the Internet at all or an app that you haven't used recently, you can block its access on the fly.

### Защита от фишинга

Browsing Security protects you from visiting phishing and malicious websites. Она также предупреждает о потенциально вредоносном ПО.

![Антифишинг *mobile_border](https://cdn.adtidy.org/blog/new/1y6a8browsing_security.png)

Если вы попытаетесь посетить опасный сайт, Защита от фишинга покажет вам такое предупреждение:

![Предупреждение Антифишинга *mobile_border](https://cdn.adtidy.org/blog/new/o8s3Screenshot_2023-06-29-15-49-01-514-edit_com.android.chrome.jpg)

> Обратите внимание, что AdGuard 	— не антивирусная программа. Он не останавливает загрузку вирусов и не удаляет уже загруженные. Чтобы полностью защитить ваше устройство, мы рекомендуем использовать AdGuard в сочетании с антивирусом.

Защите от фишинга можно доверять: AdGuard не знает, какие сайты вы посещаете. Он использует хэш-префиксы вместо URL-адресов для проверки безопасности сайта.

### Интеграция с AdGuard VPN

AdGuard для Android создает локальный VPN для фильтрации трафика. Получается, другие VPN-приложения нельзя использовать, пока работает AdGuard для Android. Но у приложений AdGuard и AdGuard VPN есть Режим интеграции, который позволяет использовать их вместе.

В этом режиме AdGuard VPN выступает в роли исходящего прокси-сервера, через который AdGuard направляет свой трафик. Это позволяет AdGuard создавать VPN-интерфейс и блокировать рекламу и трекеры локально, а AdGuard VPN направляет весь трафик через удалённый сервер.

Если вы отключите AdGuard VPN, AdGuard перестанет использовать его в качестве исходящего прокси. Если вы отключите AdGuard, AdGuard VPN будет маршрутизировать трафик через собственный VPN-интерфейс.

Если на устройство с Блокировщиком рекламы AdGuard вы установили AdGuard VPN, Блокировщик обнаружит VPN-приложение и автоматически включит *Интеграцию с AdGuard VPN*. Это работает и наоборот. Обратите внимание, что при включенной интеграции вы не сможете управлять исключениями приложений и подключаться к DNS-серверам из приложения AdGuard VPN. You can specify apps to be routed through your VPN tunnel via *Settings* → *Filtering* → *Network* → *Proxy* → *Apps operating through proxy*. Чтобы выбрать DNS-сервер, откройте AdGuard → *DNS-защита* → *DNS-сервер*.

## Управление приложениями

В этом разделе вы можете управлять разрешениями и настройками фильтрации для всех приложений, установленных на вашем устройстве.

![Управление приложениями *mobile_border](https://cdn.adtidy.org/blog/new/9sakapp_management.png)

Нажав на приложение, вы можете управлять его настройками:

- Направлять трафик через AdGuard
- Блокировать рекламу и трекеры в этом приложении (*Фильтровать контент*)
- Фильтровать его HTTPS-трафик (для небраузерных приложений требуется [установка сертификата CA AdGuard в системное хранилище](/adguard-for-android/solving-problems/https-certificate-for-rooted/), доступное на рутованных устройствах)
- Направлять его трафик через указанный прокси-сервер или AdGuard VPN в Режиме интеграции

![Управление приложениями: Chrome *mobile_border](https://cdn.adtidy.org/blog/new/nvvgochrome_management.png)

Из контекстного меню вы также можете попасть в статистику приложения.

![Управление приложениями: Chrome. Контекстное меню *mobile_border](https://cdn.adtidy.org/blog/new/4z85achome_management_context_menu.png)

### Problem-free and problematic apps

By default, only problem-free apps are routed through AdGuard and filtered. Это приложения, которые продолжают корректно работать при включённой фильтрации.

Problematic apps, such as Download Manager, radio, system apps with UID 1000 and 1001 (for example, Google Play services) may work incorrectly when routed through AdGuard. Поэтому вы можете увидеть следующее предупреждение при попытке перенаправить или отфильтровать все приложения:

![Маршрутизировать все приложения *mobile_border](https://cdn.adtidy.org/blog/new/6du8jiroute_all.png)

To ensure proper operation of all apps installed on your device, we strongly recommend that you route only problem-free apps through AdGuard. Полный список приложений, которые не рекомендуется фильтровать, можно посмотреть в разделе *Настройки* → *Основные* → *Расширенные* → *Низкоуровневые настройки* → *Защита* → *Исключённые приложения*.

## Статистика

This feature gives you a complete picture of what is happening with the traffic on your device: how many requests are being sent and to which companies, how much data is being uploaded and downloaded, what requests are being blocked, and more.

![Статистика *mobile_border](https://cdn.adtidy.org/blog/new/czy5rStatistics.jpeg?mw=1360)

Статистика разбита на несколько разделов.

### Запросы

В этом разделе отображается количество заблокированной рекламы, трекеров и общее количество запросов за выбранный период времени: 24 часа, 7 дней, 30 дней или за всё время. Также можно отфильтровать запросы по типу данных: мобильные данные, Wi-Fi или все данные вместе.

*Recent activity*, formerly known as *Filtering log*, shows the last 10,000 requests processed by AdGuard. Tap *Customize* to filter requests by status (*regular*, *blocked*, *modified*, or *allowlisted*) or origin (*first-party* or *third-party*).

Нажмите на запрос, чтобы просмотреть сведения о нём и добавить правило блокировки или разблокировки.

### Использование данных

В этом разделе отображается объём скачанного, загруженного и сохранённого трафика за выбранный период времени, а также тип данных. Нажмите *сэкономлено*, *отправлено* или *скачано*, чтобы просмотреть график использования данных с течением времени.

### Приложения

Здесь отображается статистика по всем приложениям, установленным на вашем устройстве. Вы можете сортировать приложения по количеству заблокированной рекламы или трекеров или по количеству отправленных запросов.

Нажмите *Показать все*, чтобы развернуть список ваших приложений, ранжированный по количеству рекламы, трекеров или запросов.

![Список приложений *mobile_border](https://cdn.adtidy.org/blog/new/toq0mkScreenshot_20230627-235219_AdGuard.jpg)

При нажатии на приложение можно увидеть его полную статистику: количество отправленных запросов, домены и компании, к которым оно обращается.

### Компании

В этом разделе отображаются компании, с которыми связывается ваше устройство. Что это значит? AdGuard обнаруживает домены, на которые ваше устройство отправляет запросы, и определяет, каким компаниям они принадлежат. Базу данных компаний можно найти на [GitHub](https://github.com/AdguardTeam/companiesdb).

### DNS-статистика

В этом разделе показаны данные о запросах, обработанных *DNS-защитой*. Общее количество отправленных и заблокированных AdGuard запросов вы можете увидеть в цифрах и графиках. Здесь вы также найдете статистику по объёму сохранённого, скачанного и загруженного трафика.

### Использование батареи

В этом разделе представлена статистика использования ресурсов устройства AdGuard за последние 24 часа. Данные могут отличаться от представленных в настройках вашего устройства. Это происходит потому, что система приписывает трафик отфильтрованных приложений AdGuard. Thus, the device shows that AdGuard consumes more resources than it actually does. [Подробнее о проблемах, связанных с потреблением заряда батареи и трафика](/adguard-for-android/solving-problems/battery/)

## Настройки

### Основное

Этот раздел помогает управлять внешним видом и поведением приложения: вы можете установить цветовую тему и язык, управлять уведомлениями и многое другое. Если вы хотите помочь команде AdGuard развивать приложение, можете включить опцию *Отправлять отчёты о сбоях* и *Отправлять данные об использовании приложения*.

![Основные *mobile_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

В разделе *Обновления приложения и фильтров* вы можете настроить автоматическое обновление фильтров и выбрать канал обновления приложения. Выберите *Релиз* для большей стабильности и *Бета* или *Nightly* для раннего доступа к новым функциям.

![Обновления *mobile_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

#### Расширенные настройки

*Автоматизация* позволяет управлять AdGuard через приложения-таскеры.

*Watchdog* helps protect AdGuard from being disabled by the system ([read more about Android's battery save mode](/adguard-for-android/solving-problems/background-work/)). The value you enter will be the interval in seconds between watchdog checks.

*Уровень логирования* определяет, какие данные о работе приложения должны записываться. По умолчанию приложение собирает данные о своих событиях. *Подробный* уровень фиксирует больше событий. Включайте его только по запросу команды AdGuard, чтобы обеспечить им детальное понимание проблемы. [Подробнее о сборе и отправке логов](/adguard-for-android/solving-problems/logcat/)

![Расширенные *mobile_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

Раздел *Низкоуровневых настроек* предназначен для продвинутых пользователей. [Подробнее о низкоуровневых настройках](/adguard-for-android/solving-problems/low-level-settings/)

![Низкоуровневые настройки *mobile_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

### Фильтрация

В этом разделе можно управлять настройками HTTPS-фильтрации, фильтрами и пользовательскими скриптами, а также настраивать прокси-сервер.

![Фильтрация *mobile_border](https://cdn.adtidy.org/blog/new/7v5c6filtering.png)

#### Сеть

##### HTTPS-фильтрация

Чтобы заблокировать рекламу и трекеры на большинстве веб-сайтов и в большинстве приложений, AdGuard необходимо фильтровать HTTPS-трафик. [Read more about HTTPS filtering](/general/https-filtering/what-is-https-filtering)

###### Сертификат безопасности

To manage encrypted traffic, AdGuard installs its CA certificate on your device. Это безопасно: трафик фильтруется локально, а AdGuard проверяет безопасность соединения.

В старых версиях Android сертификат устанавливается автоматически. On Android 11 and later, you need to install it manually. [Инструкция по установке](/adguard-for-android/solving-problems/manual-certificate/)

The CA certificate in the user store is enough to filter HTTPS traffic in browsers and some apps. Однако есть приложения, которые доверяют только сертификатам из системного хранилища. To filter HTTPS traffic there, you need to install AdGuard's CA certificate into the system store. [Инструкция](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

###### Приложения с HTTPS-фильтрацией

В этом разделе содержится список приложений, для которых AdGuard фильтрует HTTPS-трафик. Please note that the setting can be applied for all apps only if you have CA certificates both in the user store and in the system store.

###### Сайты с HTTPS-фильтрацией

Эта настройка позволяет вам управлять сайтами, для которых AdGuard должен фильтровать HTTPS-трафик.

HTTPS-фильтрация позволяет AdGuard фильтровать содержимое запросов и ответов, но мы никогда не собираем и не храним эти данные. However, to increase security, we [exclude websites that contain potentially sensitive information from HTTPS filtering](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data).

Вы также можете добавить в исключения сайты, которые считаете необходимыми, выбрав один из режимов:

- Исключить определённые сайты из HTTPS-фильтрации
- Фильтровать HTTPS-трафик только на сайтах, добавленных в исключения

By default, we also do not filter websites with Extended Validation (EV) certificates, such as financial websites. При необходимости вы можете включить опцию *Фильтровать сайты с EV-сертификатами*.

##### Прокси

Вы можете настроить AdGuard так, чтобы он пропускал весь трафик вашего устройства через прокси-сервер. [Как настроить исходящий прокси](/adguard-for-android/solving-problems/outbound-proxy)

В этом разделе вы также можете настроить сторонний VPN для работы с AdGuard, если это разрешено вашим VPN-провайдером.

Во вкладке *Приложения, работающие через прокси* можно выбрать приложения, которые будут направлять свой трафик через указанный вами прокси-сервер. Если у вас включена *Интеграция с AdGuard VPN*, этот параметр играет роль исключений приложений AdGuard VPN: он позволяет вам указать приложения, которые будут направляться через туннель AdGuard VPN.

##### Режим маршрутизации

Здесь вы можете выбрать метод фильтрации трафика.

- *Локальный VPN* фильтрует трафик через локально созданный VPN. Это самый надёжный режим. Due to Android restrictions, it is also the only system-wide traffic filtering method available on non-rooted devices.

:::note

Режим *Локальный VPN* не позволяет использовать AdGuard одновременно с другими VPN. Чтобы использовать другой VPN с AdGuard, вам необходимо перенастроить его для работы в режиме прокси и настроить исходящий прокси в AdGuard. Для AdGuard VPN это делается автоматически с помощью [*Режима интеграции*](#integration-with-adguard-vpn).

:::

- *Автоматический прокси* — альтернативный метод маршрутизации трафика, не требующий использования VPN. Одним из его существенных преимуществ является то, что его можно запускать параллельно с VPN. This mode requires root access.

- *Manual proxy* involves setting up a proxy server on a specific port, which can then be configured in Wi-Fi settings. This mode requires root access for Android 10 and above.

#### Фильтры

AdGuard блокирует рекламу, трекеры и раздражающие факторы, применяя правила из своих фильтров. Большинство функций из раздела *Защита* поддерживаются [фильтрами AdGuard](/general/ad-filtering/adguard-filters/#adguard-filters). Если вы включите *Базовую защиту*, автоматически включится Базовый фильтр AdGuard и Фильтр мобильной рекламы AdGuard. И наоборот: если отключить оба фильтра, *Базовая защита* тоже будет отключена.

![Фильтры *mobile_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

Для нормальной работы AdGuard достаточно фильтров, включённых по умолчанию. However, if you want to customize ad blocking, you can use other AdGuard or third-party filters. Для этого выберите категорию и включите нужные фильтры. To add a custom filter, tap *Custom filters* → *Add custom filter* and enter its URL or file path.

:::note

Если вы активируете слишком много фильтров, некоторые сайты могут работать некорректно.

:::

[Подробнее о фильтрах](https://adguard.com/en/blog/what-are-filters.html)

#### Пользовательские скрипты

Пользовательские скрипты — это мини-программы, написанные на JavaScript и меняющие поведение одного или нескольких сайтов. Для установки пользовательских скриптов вам понадобится специальный менеджер пользовательских скриптов. У AdGuard есть такая функция, которая позволяет добавлять пользовательские скрипты по URL или из файла.

![Пользовательские скрипты *mobile_border](https://cdn.adtidy.org/blog/new/isv6userscripts.png)

##### AdGuard Extra

AdGuard Extra — это специальный пользовательский скрипт, который не позволяет сайтам обходить блокировщики рекламы и повторно вставлять заблокированную рекламу.

### Лицензия

В этом разделе вы можете найти информацию о вашей лицензии и управлять ей:

- Купить лицензию AdGuard, чтобы активировать [возможности полной версии](#free-vs-full-version)
- Войти в свою учётную запись AdGuard или ввести лицензионный ключ для активации лицензии
- Зарегистрироваться для активации 7-дневного пробного периода, если вы ещё не воспользовались им
- Обновить статус лицензии, если вы недавно продлили её срок действия
- Открыть учётную запись AdGuard, чтобы управлять своей лицензией там
- Сбросить лицензию, например, если вы достигли лимита устройств для этой лицензии и хотите применить другую

![Экран лицензии *mobile_border](https://cdn.adtidy.org/blog/new/3wyh5hlicense.png)

### Поддержка

Воспользуйтесь этим разделом, если у вас возникли вопросы или есть предложения касательно AdGuard для Android. Мы рекомендуем ознакомиться с *[FAQ](https://adguard.com/support/adguard_for_android.html)* или этой базой знаний, прежде чем обращаться в службу поддержки.

![Поддержка *mobile_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

Если вы заметили пропущенную рекламу, сообщите об этом через *Сообщить о некорректной блокировке*.

При необычном поведении приложения выберите *Сообщить об ошибке*. Если возможно, подробно опишите вашу проблему и добавьте логи приложения. [Как описать проблему](/guides/report-bugs/#how-to-describe-a-problem)

Для своих предложений используйте *Запросить функцию*.

:::note

GitHub — альтернативный способ сообщать об ошибках и предлагать новые функции. [Инструкции и ссылки на репозитории](/guides/report-bugs/#adguard-for-android)

:::

### Бесплатная версия или полная

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xNOeHpZgjFo" title="Видеоплеер YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Есть бесплатная и платная версии AdGuard для Android. Платные функции расширяют возможности AdGuard:

- *Блокировка рекламы в приложениях* позволяет блокировать рекламу в небраузерных приложениях. Вы можете перечислить приложения для фильтрации в разделе [*Управление приложениями*](#app-management)

:::note

AdGuard блокирует рекламу на YouTube помощью собственного медиаплеера. Чтобы воспользоваться им, откройте приложение YouTube и поделитесь видео с AdGuard. Эта функция бесплатна.

:::

- *Tracking protection* increases your privacy by blocking tracking requests, online counters, UTM tags, analytics systems, and more. [Back to Tracking protection](#tracking-protection)

- *Защита от фишинга* предупреждает вас, если вы собираетесь посетить потенциально опасный сайт. [Back to Browsing Security](#browsing-security)

- *Собственные фильтры и правила* позволяют добавлять свои правила фильтрации и сторонние фильтры для более точной настройки блокировки рекламы. [Вернуться к фильтрам](#filters)

- *Пользовательские скрипты* позволяют использовать AdGuard Extra для обхода блокировок блокировщиков рекламы и устанавливать другие скрипты для расширения функциональности браузера. [Назад к пользовательским скриптам](#userscripts)

Вы можете получить доступ к этим функциям, [купив лицензию](https://adguard.com/license.html). [Как активировать лицензию](/general/license/activation/#activating-adguard-for-android)

### Рутованные и нерутованные устройства

Due to additional security measures of Android apps, some AdGuard features are only available on rooted devices. Вот их список:

- **HTTPS filtering in most apps** requires [installing a CA certificate into the system store](#security-certificates), as most apps do not trust certificates in the user store. Установка сертификата в системное хранилище возможна только на рутованных устройствах
- [**Автоматический прокси** в режиме маршрутизации](#routing-mode) требует root-доступа из-за ограничений Android на общесистемную фильтрацию трафика
- The **Manual proxy** routing mode requires root access on Android 10 and above as it's no longer possible to determine the name of the app associated with a connection filtered by AdGuard

## Помощник

Assistant is a handy tool to quickly change app or website settings and view statistics without launching the AdGuard app.

### How to access Assistant

 1. On your Android device, swipe down from the top of the screen to open the notification shade.
 2. Find and **expand** the AdGuard notification.

    ![Expand AdGuard notification in the notification shade *mobile](https://cdn.adtidy.org/blog/new/jkksbhassistant-shade.png)

 3. Tap *Assistant*.

    ![Tap Assistant *mobile](https://cdn.adtidy.org/blog/new/1qvlhassistant-tap-assistant.jpg)

### How to use Assistant

When you open Assistant, you will see two tabs: **Apps** and **Websites**. Each of them contains a list of the recently used apps and websites respectively.

![Assistant main *mobile](https://cdn.adtidy.org/blog/new/i5mljAssistant-main.jpg)

### Apps tab

After you select an app (**let's take Chrome as an example**), you'll get a few options of what you can do.

![Assistant Chrome menu *mobile_border](https://cdn.adtidy.org/blog/new/e1sr4Chrome-assistant.jpg)

#### Recent activity

You'll be taken to the AdGuard app, where you'll see detailed info on the last 10K requests made by Chrome.

![App recent activity *mobile_border](https://cdn.adtidy.org/blog/new/66hpechrome-recent-activity.png)

#### App statistics

You'll be taken to the AdGuard app, where you'll see detailed statistics about Chrome:

- Number of ads and trackers blocked in Chrome
- Data saved by blocking Chrome's ad or tracking requests
- Companies that Chrome sends requests to

#### Управление приложениями

You'll be taken to the AdGuard app screen where you can disable AdGuard protection for the app.

#### Firewall settings

You'll be taken to the AdGuard screen where you can change Firewall settings for the app, meaning you can manage the app's Internet access.

### Websites tab

![Assistant websites tab *mobile](https://cdn.adtidy.org/blog/new/74y9rAssistant-websites.jpg)

Select a website (**let's take google.com as an example**) and you'll see few options of what you can do.

![Assistant google.com info *mobile](https://cdn.adtidy.org/blog/new/tht0tgoogle-com-assistant.jpg)

#### Add to allowlist

Tapping this option will instantly add google.com to allowlist, and AdGuard will no longer filter it (meaning ads and trackers won't be blocked for the website).

#### Recent activity

You'll be taken to the AdGuard app, where you'll see detailed info on the last 10K requests to google.com.

![website recent activity *mobile_border](https://cdn.adtidy.org/blog/new/xq7f3assistant-website-recent-activity.png)

#### Website statistics

You'll be taken to the AdGuard app, where you'll see detailed statistics about google.com:

- Number of blocked ad and tracking requests to google.com
- Data saved by blocking ad and tracking requests to google.com
- Apps that send requests to google.com
- Information about google.com's subdomains
