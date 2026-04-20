// ============================================================
// SillyTavern Android Theme — index.js
// Bottom navigation, bottom sheets, chat toolbar, gestures
// ============================================================

const MODULE_NAME = 'android-theme';

// ── SVG Icons ──
const ICONS = {
    chats: '<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/></svg>',
    create: '<svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>',
    rocket: '<svg viewBox="0 0 24 24"><path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zM17.65 14.81c-.26.66-.19 1.34.55 1.81l-4.05 4.05-1.55-3.62c.31-.13 3.6-1.53 5.89-3.57l-.84 1.33zM15.5 9c-.83 0-1.5-.67-1.5-1.5S14.67 6 15.5 6 17 6.67 17 7.5 16.33 9 15.5 9zM5 19c0 .55.45 1 1 1h1.67c0-1.84-1.49-3.33-3.33-3.33-.37 0-.67.3-.67.67v1.66z"/></svg>',
    compass: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/></svg>',
    profile: '<svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',
    close: '<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
    palette: '<svg viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-1-.01-.83.67-1.49 1.5-1.49H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>',
    more: '<svg viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>',
    edit: '<svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>',
    regen: '<svg viewBox="0 0 24 24"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg>',
    cont: '<svg viewBox="0 0 24 24"><path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 000-1.41l-6.58-6.6a.996.996 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z"/></svg>',
    del: '<svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>',
    copy: '<svg viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>',
    newchat: '<svg viewBox="0 0 24 24"><path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"/></svg>',
};

// ── Tab configuration ──
const TABS = [
    { id: 'chats',   icon: ICONS.chats,   label: 'Чаты',       action: 'openChats' },
    { id: 'create',  icon: ICONS.create,  label: 'Создать',    action: 'openCreate' },
    { id: 'api',     icon: ICONS.rocket,  label: 'API',        action: 'openAPI' },
    { id: 'explore', icon: ICONS.compass, label: 'Настройки',  action: 'openExplore' },
    { id: 'me',      icon: ICONS.profile, label: 'Я',          action: 'openProfile' },
];

// ── State ──
let activeTab = 'chats';
let currentSheet = null;
let lastScrollY = 0;
let scrollTimeout = null;

// ============================================================
// INITIALIZATION
// ============================================================
jQuery(async () => {
    // Only activate on mobile
    if (window.innerWidth > 1000) {
        console.log(`[${MODULE_NAME}] Desktop detected, skipping mobile UI`);
        return;
    }

    console.log(`[${MODULE_NAME}] Initializing Android Theme...`);

    createBottomNav();
    createSheetOverlay();
    setupScrollHandler();
    setupMessageGestures();

    console.log(`[${MODULE_NAME}] Android Theme loaded successfully`);
});

// ============================================================
// BOTTOM NAVIGATION
// ============================================================
function createBottomNav() {
    // Remove existing if re-initializing
    $('#at-bottom-nav').remove();

    const nav = $('<div id="at-bottom-nav"></div>');

    TABS.forEach(tab => {
        const item = $(`
            <div class="at-nav-item ${tab.id === activeTab ? 'active' : ''}" data-tab="${tab.id}">
                <div class="at-nav-icon">${tab.icon}</div>
                <span class="at-nav-label">${tab.label}</span>
            </div>
        `);

        item.on('click', () => handleTabClick(tab));
        nav.append(item);
    });

    $('body').append(nav);
}

function handleTabClick(tab) {
    // Update active state
    activeTab = tab.id;
    $('.at-nav-item').removeClass('active');
    $(`.at-nav-item[data-tab="${tab.id}"]`).addClass('active');

    // Close any open sheets
    closeSheet();

    // Execute tab action
    switch (tab.action) {
        case 'openChats':
            openChatsTab();
            break;
        case 'openCreate':
            openCreateSheet();
            break;
        case 'openAPI':
            openAPIPanel();
            break;
        case 'openExplore':
            openExploreSheet();
            break;
        case 'openProfile':
            openProfilePanel();
            break;
    }
}

// ── Tab Actions ──

function openChatsTab() {
    // Close all ST panels, show chat
    closeAllSTPanels();
    // Click on the character list panel toggle if it has a "recent chats" view
    // For now, just ensure chat is visible
}

function openCreateSheet() {
    const content = `
        <div class="at-settings-grid">
            <div class="at-settings-card" data-action="new-character">
                <div class="at-settings-card-title">Персонаж</div>
                <div class="at-settings-card-preview">Создать нового персонажа</div>
            </div>
            <div class="at-settings-card" data-action="new-chat">
                <div class="at-settings-card-title">Новый чат</div>
                <div class="at-settings-card-preview">Начать новый диалог</div>
            </div>
            <div class="at-settings-card" data-action="lorebook">
                <div class="at-settings-card-title">Лорбук</div>
                <div class="at-settings-card-preview">Миры и лорбуки</div>
            </div>
            <div class="at-settings-card" data-action="extensions">
                <div class="at-settings-card-title">Расширения</div>
                <div class="at-settings-card-preview">Управление расширениями</div>
            </div>
            <div class="at-settings-card" data-action="formatting">
                <div class="at-settings-card-title">Форматирование</div>
                <div class="at-settings-card-preview">Шаблон контекста</div>
            </div>
            <div class="at-settings-card" data-action="backgrounds">
                <div class="at-settings-card-title">Фоны</div>
                <div class="at-settings-card-preview">Выбрать фон чата</div>
            </div>
        </div>
    `;

    openSheet('Создать', content);

    // Wire up card actions
    setTimeout(() => {
        $('.at-settings-card[data-action="new-character"]').on('click', () => {
            closeSheet();
            triggerSTButton('#create_button'); // ST's create character button
        });
        $('.at-settings-card[data-action="new-chat"]').on('click', () => {
            closeSheet();
            triggerSTAction('newChat');
        });
        $('.at-settings-card[data-action="lorebook"]').on('click', () => {
            closeSheet();
            triggerSTDrawer(3); // World Info drawer index
        });
        $('.at-settings-card[data-action="extensions"]').on('click', () => {
            closeSheet();
            triggerSTDrawer(5); // Extensions drawer index
        });
        $('.at-settings-card[data-action="formatting"]').on('click', () => {
            closeSheet();
            triggerSTDrawer(2); // Advanced formatting drawer
        });
        $('.at-settings-card[data-action="backgrounds"]').on('click', () => {
            closeSheet();
            triggerSTDrawer(4); // Backgrounds drawer
        });
    }, 100);
}

function openAPIPanel() {
    // Open ST's API connection panel
    closeAllSTPanels();
    triggerSTDrawer(1); // API connection is typically the 2nd drawer icon
}

function openExploreSheet() {
    const content = `
        <div class="at-settings-grid">
            <div class="at-settings-card" data-action="presets">
                <div class="at-settings-card-title">Пресеты</div>
                <div class="at-settings-card-preview">Настройки генерации</div>
            </div>
            <div class="at-settings-card" data-action="user-settings">
                <div class="at-settings-card-title">Настройки UI</div>
                <div class="at-settings-card-preview">Тема, аватары, стиль</div>
            </div>
        </div>
    `;

    openSheet('Настройки', content);

    setTimeout(() => {
        $('.at-settings-card[data-action="presets"]').on('click', () => {
            closeSheet();
            triggerSTDrawer(0); // Presets/generation settings
        });
        $('.at-settings-card[data-action="user-settings"]').on('click', () => {
            closeSheet();
            triggerSTDrawer(6); // User settings
        });
    }, 100);
}

function openProfilePanel() {
    // Open ST's persona management
    closeAllSTPanels();
    triggerSTDrawer(7); // Persona management drawer
}

// ============================================================
// BOTTOM SHEET
// ============================================================
function createSheetOverlay() {
    if ($('#at-sheet-overlay').length) return;

    const overlay = $('<div id="at-sheet-overlay" class="at-sheet-overlay"></div>');
    overlay.on('click', closeSheet);
    $('body').append(overlay);
}

function openSheet(title, bodyHTML) {
    closeSheet();

    const sheet = $(`
        <div class="at-bottom-sheet" id="at-active-sheet">
            <div class="at-sheet-handle"></div>
            <div class="at-sheet-header">
                <span class="at-sheet-title">${title}</span>
                <button class="at-sheet-close">${ICONS.close}</button>
            </div>
            <div class="at-sheet-body">
                ${bodyHTML}
            </div>
        </div>
    `);

    sheet.find('.at-sheet-close').on('click', closeSheet);
    $('body').append(sheet);
    $('#at-sheet-overlay').addClass('active');

    // Trigger animation
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            sheet.addClass('active');
        });
    });

    currentSheet = sheet;

    // Touch-based dismiss
    setupSheetDrag(sheet);
}

function closeSheet() {
    $('#at-sheet-overlay').removeClass('active');
    const sheet = $('#at-active-sheet');
    if (sheet.length) {
        sheet.removeClass('active');
        setTimeout(() => sheet.remove(), 350);
    }
    currentSheet = null;
}

function setupSheetDrag(sheet) {
    let startY = 0;
    let currentY = 0;
    let isDragging = false;

    const handle = sheet.find('.at-sheet-handle')[0];
    if (!handle) return;

    handle.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        isDragging = true;
        sheet.css('transition', 'none');
    }, { passive: true });

    handle.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentY = e.touches[0].clientY - startY;
        if (currentY > 0) {
            sheet.css('transform', `translateY(${currentY}px)`);
        }
    }, { passive: true });

    handle.addEventListener('touchend', () => {
        isDragging = false;
        sheet.css('transition', '');
        if (currentY > 120) {
            closeSheet();
        } else {
            sheet.css('transform', '');
            sheet.addClass('active');
        }
        currentY = 0;
    });
}

// ============================================================
// SCROLL HANDLER (auto-hide bottom nav)
// ============================================================
function setupScrollHandler() {
    const chatContainer = document.getElementById('chat');
    if (!chatContainer) return;

    const nav = document.getElementById('at-bottom-nav');
    if (!nav) return;

    // Use MutationObserver to attach scroll listener when chat becomes available
    const observer = new MutationObserver(() => {
        const chatEl = document.getElementById('chat');
        if (chatEl && !chatEl.dataset.atScrollBound) {
            chatEl.dataset.atScrollBound = 'true';
            chatEl.addEventListener('scroll', () => {
                const currentScroll = chatEl.scrollTop;
                if (currentScroll > lastScrollY + 20) {
                    nav.classList.add('at-hidden');
                } else if (currentScroll < lastScrollY - 10) {
                    nav.classList.remove('at-hidden');
                }
                lastScrollY = currentScroll;
            }, { passive: true });
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

// ============================================================
// MESSAGE GESTURES
// ============================================================
function setupMessageGestures() {
    // Use event delegation on the chat container
    $(document).on('contextmenu', '.mes', function(e) {
        // Only on mobile
        if (window.innerWidth > 1000) return;
        
        e.preventDefault();
        e.stopPropagation();
        showContextMenu(e, $(this));
    });

    // Close context menu on outside click
    $(document).on('click touchstart', function(e) {
        if (!$(e.target).closest('#at-context-menu').length) {
            closeContextMenu();
        }
    });
}

function showContextMenu(e, messageEl) {
    closeContextMenu();

    const isUser = messageEl.hasClass('last_mes') || messageEl.find('.mes_buttons').length > 0;
    const mesId = messageEl.attr('mesid');

    let items = '';
    
    // For AI messages
    items += `<div class="at-ctx-item" data-action="copy">${ICONS.copy} Копировать</div>`;
    items += `<div class="at-ctx-item" data-action="edit">${ICONS.edit} Редактировать</div>`;
    items += `<div class="at-ctx-divider"></div>`;
    items += `<div class="at-ctx-item" data-action="regen">${ICONS.regen} Перегенерировать</div>`;
    items += `<div class="at-ctx-item" data-action="continue">${ICONS.cont} Продолжить</div>`;
    items += `<div class="at-ctx-divider"></div>`;
    items += `<div class="at-ctx-item" data-action="newchat">${ICONS.newchat} Начать новый чат</div>`;
    items += `<div class="at-ctx-item" data-action="delete" style="color: #ff6b6b;">${ICONS.del} Удалить</div>`;

    const menu = $(`<div id="at-context-menu">${items}</div>`);
    $('body').append(menu);

    // Position: center on screen for mobile
    const menuHeight = 380; // approximate
    const y = Math.min(e.clientY || e.originalEvent?.touches?.[0]?.clientY || 300, window.innerHeight - menuHeight - 20);
    const x = Math.max(10, Math.min((e.clientX || e.originalEvent?.touches?.[0]?.clientX || 100) - 100, window.innerWidth - 220));

    menu.css({ top: y + 'px', left: x + 'px' });

    requestAnimationFrame(() => menu.addClass('active'));

    // Wire up actions
    menu.find('[data-action="copy"]').on('click', () => {
        const text = messageEl.find('.mes_text').text();
        navigator.clipboard?.writeText(text);
        closeContextMenu();
    });

    menu.find('[data-action="edit"]').on('click', () => {
        closeContextMenu();
        // Trigger ST's native edit
        messageEl.find('.mes_edit').trigger('click');
    });

    menu.find('[data-action="regen"]').on('click', () => {
        closeContextMenu();
        $('#option_regenerate').trigger('click');
    });

    menu.find('[data-action="continue"]').on('click', () => {
        closeContextMenu();
        $('#mes_continue').trigger('click');
    });

    menu.find('[data-action="newchat"]').on('click', () => {
        closeContextMenu();
        triggerSTAction('newChat');
    });

    menu.find('[data-action="delete"]').on('click', () => {
        closeContextMenu();
        messageEl.find('.mes_edit_delete').trigger('click');
    });
}

function closeContextMenu() {
    const menu = $('#at-context-menu');
    if (menu.length) {
        menu.removeClass('active');
        setTimeout(() => menu.remove(), 150);
    }
}

// ============================================================
// ST PANEL HELPERS
// ============================================================
function closeAllSTPanels() {
    // Close all open drawers
    $('.openDrawer').removeClass('openDrawer');
    $('.drawer-content.openDrawer').removeClass('openDrawer');
    // Close right panel
    $('#right-nav-panel').removeClass('openDrawer');
}

function triggerSTDrawer(index) {
    // ST's top bar drawer icons — click the Nth one
    const drawers = $('#top-settings-holder .drawer-icon, #top-bar .drawer-icon');
    if (drawers.length > index) {
        // First make sure the top bar exists (even if hidden)
        const icon = drawers.eq(index);
        icon.trigger('click');
    }
}

function triggerSTButton(selector) {
    const btn = $(selector);
    if (btn.length) {
        btn.trigger('click');
    }
}

function triggerSTAction(action) {
    try {
        const context = SillyTavern.getContext();
        switch (action) {
            case 'newChat':
                // Try to find and click the new chat option
                if (typeof context.clearChat === 'function') {
                    context.clearChat();
                } else {
                    // Fallback: find the new chat button in ST UI
                    const newChatBtn = $('[id*="newChat"], .options_button:contains("New Chat"), #option_start_new_chat');
                    if (newChatBtn.length) newChatBtn.first().trigger('click');
                }
                break;
        }
    } catch (e) {
        console.warn(`[${MODULE_NAME}] Action ${action} failed:`, e);
    }
}

// ============================================================
// SETTINGS HTML (Extension Settings Panel in ST)
// ============================================================
// This gets rendered in ST's Extensions panel
jQuery(async () => {
    // Wait a bit for ST to be ready
    await new Promise(r => setTimeout(r, 2000));

    try {
        const settingsHtml = `
            <div class="android-theme-settings" style="padding: 12px;">
                <div class="inline-drawer">
                    <div class="inline-drawer-toggle inline-drawer-header">
                        <b>Android Mobile Theme</b>
                        <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
                    </div>
                    <div class="inline-drawer-content">
                        <p style="margin: 8px 0; color: var(--at-text-secondary, #888); font-size: 13px;">
                            Чистый, современный интерфейс в стиле Android. 
                            Нижняя навигация, bottom sheets, минимум визуального шума.
                        </p>
                        <p style="font-size: 12px; color: var(--at-text-tertiary, #666);">
                            v1.0.0 — Активна только на мобильных устройствах (ширина &lt; 1000px)
                        </p>
                    </div>
                </div>
            </div>
        `;

        $('#extensions_settings').append(settingsHtml);
    } catch (e) {
        console.error(`[${MODULE_NAME}] Settings injection error:`, e);
    }
});
