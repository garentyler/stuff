use uuid::Uuid;
use chrono::prelude::*;

pub struct Stuff {
    pub settings: Settings,
    pub inbox: Vec<Todo>,
    pub logbook: Vec<Todo>,
    pub trash: Vec<Todo>,
    pub areas: Vec<Area>,
    pub projects: Vec<Project>,
}

pub struct Settings {
    pub moveCompletedItemsToLogbookFrequency: LogbookMoveFrequencyOptions,
    pub badgeCount: BadgeCountOptions,
    pub groupTodayTodos: bool,
    pub preserveWindowWidth: bool,
    pub enableStuffUrls: bool,
    pub stuffUrlAuthenticationToken: String,
    pub quickEntryShortcutEnabled: bool,
    pub quickEntryShortcutKeybind: String,
    pub quickEntryWithAutofillShortcutEnabled: bool,
    pub quickEntryWithAutofillShortcutKeybind: String,
    pub quickEntrySaveLocation: QuickEntrySaveLocationOptions,
}

pub enum LogbookMoveFrequencyOptions {
    Immediately,
    Daily,
    Manually,
}

pub enum BadgeCountOptions {
    None,
    DeadlinesOnly,
    Today,
    TodayAndInbox,
}

pub enum QuickEntrySaveLocationOptions {
    Inbox,
    Today,
}

pub struct Area {
    pub id: Uuid,
    pub title: String,
    pub projects: Vec<Project>,
    pub todos: Vec<Todo>,
}

pub struct Project {
    pub id: Uuid,
    pub title: String,
    pub todos: Vec<Todo>,
    pub headings: Vec<Heading>,
}

pub struct Heading {
    pub id: Uuid,
    pub title: String,
    pub todos: Vec<Todo>,
}

pub struct Todo {
    pub id: Uuid,
    pub title: String,
    pub notes: String,
    pub completionDate: Option<DateTime<Utc>>,
    pub when: When,
    pub reminder: Option<DateTime<Utc>>,
    pub tags: Vec<Tag>,
    pub checklist: Vec<CheckListItem>,
    pub deadline: Option<DateTime<Utc>>,
}

pub enum When {
    Today,
    ThisEvening,
    Someday,
    Anytime,
    Date(DateTime<Utc>),
}

pub struct Tag {
    pub id: Uuid,
    pub name: String,
}

pub struct CheckListItem {
    pub id: Uuid,
    pub completed: bool,
    pub title: String,
}

