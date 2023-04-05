import React from "react";
import classNames from "classnames";
import { Theme } from "../../constants/Type";
import { FillIConType } from "../../constants/Icon";
import { ReactComponent as Circle0Fill } from "../../assets/Icons/fill/0-circle-fill.svg";
import { ReactComponent as Square0Fill } from "../../assets/Icons/fill/0-square-fill.svg";
import { ReactComponent as Circle1Fill } from "../../assets/Icons/fill/1-circle-fill.svg";
import { ReactComponent as Square1Fill } from "../../assets/Icons/fill/1-square-fill.svg";
import { ReactComponent as Circle2Fill } from "../../assets/Icons/fill/2-circle-fill.svg";
import { ReactComponent as Square2Fill } from "../../assets/Icons/fill/2-square-fill.svg";
import { ReactComponent as Circle3Fill } from "../../assets/Icons/fill/3-circle-fill.svg";
import { ReactComponent as Square3Fill } from "../../assets/Icons/fill/3-square-fill.svg";
import { ReactComponent as Circle4Fill } from "../../assets/Icons/fill/4-circle-fill.svg";
import { ReactComponent as Square4Fill } from "../../assets/Icons/fill/4-square-fill.svg";
import { ReactComponent as Circle5Fill } from "../../assets/Icons/fill/5-circle-fill.svg";
import { ReactComponent as Square5Fill } from "../../assets/Icons/fill/5-square-fill.svg";
import { ReactComponent as Circle6Fill } from "../../assets/Icons/fill/6-circle-fill.svg";
import { ReactComponent as Square6Fill } from "../../assets/Icons/fill/6-square-fill.svg";
import { ReactComponent as Circle7Fill } from "../../assets/Icons/fill/7-circle-fill.svg";
import { ReactComponent as Square7Fill } from "../../assets/Icons/fill/7-square-fill.svg";
import { ReactComponent as Circle8Fill } from "../../assets/Icons/fill/8-circle-fill.svg";
import { ReactComponent as Square8Fill } from "../../assets/Icons/fill/8-square-fill.svg";
import { ReactComponent as Circle9Fill } from "../../assets/Icons/fill/9-circle-fill.svg";
import { ReactComponent as Square9Fill } from "../../assets/Icons/fill/9-square-fill.svg";
import { ReactComponent as AirplaneEnginesFill } from "../../assets/Icons/fill/airplane-engines-fill.svg";
import { ReactComponent as AirplaneFill } from "../../assets/Icons/fill/airplane-fill.svg";
import { ReactComponent as AlarmFill } from "../../assets/Icons/fill/alarm-fill.svg";
import { ReactComponent as ArchiveFill } from "../../assets/Icons/fill/archive-fill.svg";
import { ReactComponent as ArrowDownCircleFill } from "../../assets/Icons/fill/arrow-down-circle-fill.svg";
import { ReactComponent as ArrowDownLeftCircleFill } from "../../assets/Icons/fill/arrow-down-left-circle-fill.svg";
import { ReactComponent as ArrowDownLeftSquareFill } from "../../assets/Icons/fill/arrow-down-left-square-fill.svg";
import { ReactComponent as ArrowDownRightCircleFill } from "../../assets/Icons/fill/arrow-down-right-circle-fill.svg";
import { ReactComponent as ArrowDownRightSquareFill } from "../../assets/Icons/fill/arrow-down-right-square-fill.svg";
import { ReactComponent as ArrowDownSquareFill } from "../../assets/Icons/fill/arrow-down-square-fill.svg";
import { ReactComponent as ArrowLeftCircleFill } from "../../assets/Icons/fill/arrow-left-circle-fill.svg";
import { ReactComponent as ArrowLeftSquareFill } from "../../assets/Icons/fill/arrow-left-square-fill.svg";
import { ReactComponent as ArrowRightCircleFill } from "../../assets/Icons/fill/arrow-right-circle-fill.svg";
import { ReactComponent as ArrowRightSquareFill } from "../../assets/Icons/fill/arrow-right-square-fill.svg";
import { ReactComponent as ArrowThroughHeartFill } from "../../assets/Icons/fill/arrow-through-heart-fill.svg";
import { ReactComponent as ArrowUpCircleFill } from "../../assets/Icons/fill/arrow-up-circle-fill.svg";
import { ReactComponent as ArrowUpLeftCircleFill } from "../../assets/Icons/fill/arrow-up-left-circle-fill.svg";
import { ReactComponent as ArrowUpLeftSquareFill } from "../../assets/Icons/fill/arrow-up-left-square-fill.svg";
import { ReactComponent as ArrowUpRightCircleFill } from "../../assets/Icons/fill/arrow-up-right-circle-fill.svg";
import { ReactComponent as ArrowUpRightSquareFill } from "../../assets/Icons/fill/arrow-up-right-square-fill.svg";
import { ReactComponent as ArrowUpSquareFill } from "../../assets/Icons/fill/arrow-up-square-fill.svg";
import { ReactComponent as AspectRatioFill } from "../../assets/Icons/fill/aspect-ratio-fill.svg";
import { ReactComponent as AwardFill } from "../../assets/Icons/fill/award-fill.svg";
import { ReactComponent as BackspaceFill } from "../../assets/Icons/fill/backspace-fill.svg";
import { ReactComponent as BackspaceReverseFill } from "../../assets/Icons/fill/backspace-reverse-fill.svg";
import { ReactComponent as Badge3dFill } from "../../assets/Icons/fill/badge-3d-fill.svg";
import { ReactComponent as Badge4kFill } from "../../assets/Icons/fill/badge-4k-fill.svg";
import { ReactComponent as Badge8kFill } from "../../assets/Icons/fill/badge-8k-fill.svg";
import { ReactComponent as BadgeAdFill } from "../../assets/Icons/fill/badge-ad-fill.svg";
import { ReactComponent as BadgeArFill } from "../../assets/Icons/fill/badge-ar-fill.svg";
import { ReactComponent as BadgeCcFill } from "../../assets/Icons/fill/badge-cc-fill.svg";
import { ReactComponent as BadgeHdFill } from "../../assets/Icons/fill/badge-hd-fill.svg";
import { ReactComponent as BadgeSdFill } from "../../assets/Icons/fill/badge-sd-fill.svg";
import { ReactComponent as BadgeTmFill } from "../../assets/Icons/fill/badge-tm-fill.svg";
import { ReactComponent as BadgeVoFill } from "../../assets/Icons/fill/badge-vo-fill.svg";
import { ReactComponent as BadgeVrFill } from "../../assets/Icons/fill/badge-vr-fill.svg";
import { ReactComponent as BadgeWcFill } from "../../assets/Icons/fill/badge-wc-fill.svg";
import { ReactComponent as BagCheckFill } from "../../assets/Icons/fill/bag-check-fill.svg";
import { ReactComponent as BagDashFill } from "../../assets/Icons/fill/bag-dash-fill.svg";
import { ReactComponent as BagFill } from "../../assets/Icons/fill/bag-fill.svg";
import { ReactComponent as BagHeartFill } from "../../assets/Icons/fill/bag-heart-fill.svg";
import { ReactComponent as BagPlusFill } from "../../assets/Icons/fill/bag-plus-fill.svg";
import { ReactComponent as BagXFill } from "../../assets/Icons/fill/bag-x-fill.svg";
import { ReactComponent as BalloonFill } from "../../assets/Icons/fill/balloon-fill.svg";
import { ReactComponent as BalloonHeartFill } from "../../assets/Icons/fill/balloon-heart-fill.svg";
import { ReactComponent as BandaidFill } from "../../assets/Icons/fill/bandaid-fill.svg";
import { ReactComponent as BarChartFill } from "../../assets/Icons/fill/bar-chart-fill.svg";
import { ReactComponent as BarChartLineFill } from "../../assets/Icons/fill/bar-chart-line-fill.svg";
import { ReactComponent as BasketFill } from "../../assets/Icons/fill/basket-fill.svg";
import { ReactComponent as Basket2Fill } from "../../assets/Icons/fill/basket2-fill.svg";
import { ReactComponent as Basket3Fill } from "../../assets/Icons/fill/basket3-fill.svg";
import { ReactComponent as BellFill } from "../../assets/Icons/fill/bell-fill.svg";
import { ReactComponent as BellSlashFill } from "../../assets/Icons/fill/bell-slash-fill.svg";
import { ReactComponent as BinocularsFill } from "../../assets/Icons/fill/binoculars-fill.svg";
import { ReactComponent as BookFill } from "../../assets/Icons/fill/book-fill.svg";
import { ReactComponent as BookmarkCheckFill } from "../../assets/Icons/fill/bookmark-check-fill.svg";
import { ReactComponent as BookmarkDashFill } from "../../assets/Icons/fill/bookmark-dash-fill.svg";
import { ReactComponent as BookmarkFill } from "../../assets/Icons/fill/bookmark-fill.svg";
import { ReactComponent as BookmarkHeartFill } from "../../assets/Icons/fill/bookmark-heart-fill.svg";
import { ReactComponent as BookmarkPlusFill } from "../../assets/Icons/fill/bookmark-plus-fill.svg";
import { ReactComponent as BookmarkStarFill } from "../../assets/Icons/fill/bookmark-star-fill.svg";
import { ReactComponent as BookmarkXFill } from "../../assets/Icons/fill/bookmark-x-fill.svg";
import { ReactComponent as BookmarksFill } from "../../assets/Icons/fill/bookmarks-fill.svg";
import { ReactComponent as BoomboxFill } from "../../assets/Icons/fill/boombox-fill.svg";
import { ReactComponent as BootstrapFill } from "../../assets/Icons/fill/bootstrap-fill.svg";
import { ReactComponent as BoxFill } from "../../assets/Icons/fill/box-fill.svg";
import { ReactComponent as BoxSeamFill } from "../../assets/Icons/fill/box-seam-fill.svg";
import { ReactComponent as Box2Fill } from "../../assets/Icons/fill/box2-fill.svg";
import { ReactComponent as Box2HeartFill } from "../../assets/Icons/fill/box2-heart-fill.svg";
import { ReactComponent as BriefcaseFill } from "../../assets/Icons/fill/briefcase-fill.svg";
import { ReactComponent as BrightnessAltHighFill } from "../../assets/Icons/fill/brightness-alt-high-fill.svg";
import { ReactComponent as BrightnessAltLowFill } from "../../assets/Icons/fill/brightness-alt-low-fill.svg";
import { ReactComponent as BrightnessHighFill } from "../../assets/Icons/fill/brightness-high-fill.svg";
import { ReactComponent as BrightnessLowFill } from "../../assets/Icons/fill/brightness-low-fill.svg";
import { ReactComponent as BrushFill } from "../../assets/Icons/fill/brush-fill.svg";
import { ReactComponent as BucketFill } from "../../assets/Icons/fill/bucket-fill.svg";
import { ReactComponent as BugFill } from "../../assets/Icons/fill/bug-fill.svg";
import { ReactComponent as BuildingFillAdd } from "../../assets/Icons/fill/building-fill-add.svg";
import { ReactComponent as BuildingFillCheck } from "../../assets/Icons/fill/building-fill-check.svg";
import { ReactComponent as BuildingFillDash } from "../../assets/Icons/fill/building-fill-dash.svg";
import { ReactComponent as BuildingFillDown } from "../../assets/Icons/fill/building-fill-down.svg";
import { ReactComponent as BuildingFillExclamation } from "../../assets/Icons/fill/building-fill-exclamation.svg";
import { ReactComponent as BuildingFillGear } from "../../assets/Icons/fill/building-fill-gear.svg";
import { ReactComponent as BuildingFillLock } from "../../assets/Icons/fill/building-fill-lock.svg";
import { ReactComponent as BuildingFillSlash } from "../../assets/Icons/fill/building-fill-slash.svg";
import { ReactComponent as BuildingFillUp } from "../../assets/Icons/fill/building-fill-up.svg";
import { ReactComponent as BuildingFillX } from "../../assets/Icons/fill/building-fill-x.svg";
import { ReactComponent as BuildingFill } from "../../assets/Icons/fill/building-fill.svg";
import { ReactComponent as BuildingsFill } from "../../assets/Icons/fill/buildings-fill.svg";
import { ReactComponent as BusFrontFill } from "../../assets/Icons/fill/bus-front-fill.svg";
import { ReactComponent as CCircleFill } from "../../assets/Icons/fill/c-circle-fill.svg";
import { ReactComponent as CSquareFill } from "../../assets/Icons/fill/c-square-fill.svg";
import { ReactComponent as CalculatorFill } from "../../assets/Icons/fill/calculator-fill.svg";
import { ReactComponent as CalendarCheckFill } from "../../assets/Icons/fill/calendar-check-fill.svg";
import { ReactComponent as CalendarDateFill } from "../../assets/Icons/fill/calendar-date-fill.svg";
import { ReactComponent as CalendarDayFill } from "../../assets/Icons/fill/calendar-day-fill.svg";
import { ReactComponent as CalendarEventFill } from "../../assets/Icons/fill/calendar-event-fill.svg";
import { ReactComponent as CalendarFill } from "../../assets/Icons/fill/calendar-fill.svg";
import { ReactComponent as CalendarHeartFill } from "../../assets/Icons/fill/calendar-heart-fill.svg";
import { ReactComponent as CalendarMinusFill } from "../../assets/Icons/fill/calendar-minus-fill.svg";
import { ReactComponent as CalendarMonthFill } from "../../assets/Icons/fill/calendar-month-fill.svg";
import { ReactComponent as CalendarPlusFill } from "../../assets/Icons/fill/calendar-plus-fill.svg";
import { ReactComponent as CalendarRangeFill } from "../../assets/Icons/fill/calendar-range-fill.svg";
import { ReactComponent as CalendarWeekFill } from "../../assets/Icons/fill/calendar-week-fill.svg";
import { ReactComponent as CalendarXFill } from "../../assets/Icons/fill/calendar-x-fill.svg";
import { ReactComponent as Calendar2CheckFill } from "../../assets/Icons/fill/calendar2-check-fill.svg";
import { ReactComponent as Calendar2DateFill } from "../../assets/Icons/fill/calendar2-date-fill.svg";
import { ReactComponent as Calendar2DayFill } from "../../assets/Icons/fill/calendar2-day-fill.svg";
import { ReactComponent as Calendar2EventFill } from "../../assets/Icons/fill/calendar2-event-fill.svg";
import { ReactComponent as Calendar2Fill } from "../../assets/Icons/fill/calendar2-fill.svg";
import { ReactComponent as Calendar2HeartFill } from "../../assets/Icons/fill/calendar2-heart-fill.svg";
import { ReactComponent as Calendar2MinusFill } from "../../assets/Icons/fill/calendar2-minus-fill.svg";
import { ReactComponent as Calendar2MonthFill } from "../../assets/Icons/fill/calendar2-month-fill.svg";
import { ReactComponent as Calendar2PlusFill } from "../../assets/Icons/fill/calendar2-plus-fill.svg";
import { ReactComponent as Calendar2RangeFill } from "../../assets/Icons/fill/calendar2-range-fill.svg";
import { ReactComponent as Calendar2WeekFill } from "../../assets/Icons/fill/calendar2-week-fill.svg";
import { ReactComponent as Calendar2XFill } from "../../assets/Icons/fill/calendar2-x-fill.svg";
import { ReactComponent as Calendar3EventFill } from "../../assets/Icons/fill/calendar3-event-fill.svg";
import { ReactComponent as Calendar3Fill } from "../../assets/Icons/fill/calendar3-fill.svg";
import { ReactComponent as Calendar3RangeFill } from "../../assets/Icons/fill/calendar3-range-fill.svg";
import { ReactComponent as Calendar3WeekFill } from "../../assets/Icons/fill/calendar3-week-fill.svg";
import { ReactComponent as CameraFill } from "../../assets/Icons/fill/camera-fill.svg";
import { ReactComponent as CameraReelsFill } from "../../assets/Icons/fill/camera-reels-fill.svg";
import { ReactComponent as CameraVideoFill } from "../../assets/Icons/fill/camera-video-fill.svg";
import { ReactComponent as CameraVideoOffFill } from "../../assets/Icons/fill/camera-video-off-fill.svg";
import { ReactComponent as CapslockFill } from "../../assets/Icons/fill/capslock-fill.svg";
import { ReactComponent as CarFrontFill } from "../../assets/Icons/fill/car-front-fill.svg";
import { ReactComponent as CaretDownFill } from "../../assets/Icons/fill/caret-down-fill.svg";
import { ReactComponent as CaretDownSquareFill } from "../../assets/Icons/fill/caret-down-square-fill.svg";
import { ReactComponent as CaretLeftFill } from "../../assets/Icons/fill/caret-left-fill.svg";
import { ReactComponent as CaretLeftSquareFill } from "../../assets/Icons/fill/caret-left-square-fill.svg";
import { ReactComponent as CaretRightFill } from "../../assets/Icons/fill/caret-right-fill.svg";
import { ReactComponent as CaretRightSquareFill } from "../../assets/Icons/fill/caret-right-square-fill.svg";
import { ReactComponent as CaretUpFill } from "../../assets/Icons/fill/caret-up-fill.svg";
import { ReactComponent as CaretUpSquareFill } from "../../assets/Icons/fill/caret-up-square-fill.svg";
import { ReactComponent as CartCheckFill } from "../../assets/Icons/fill/cart-check-fill.svg";
import { ReactComponent as CartDashFill } from "../../assets/Icons/fill/cart-dash-fill.svg";
import { ReactComponent as CartFill } from "../../assets/Icons/fill/cart-fill.svg";
import { ReactComponent as CartPlusFill } from "../../assets/Icons/fill/cart-plus-fill.svg";
import { ReactComponent as CartXFill } from "../../assets/Icons/fill/cart-x-fill.svg";
import { ReactComponent as CassetteFill } from "../../assets/Icons/fill/cassette-fill.svg";
import { ReactComponent as CcCircleFill } from "../../assets/Icons/fill/cc-circle-fill.svg";
import { ReactComponent as CcSquareFill } from "../../assets/Icons/fill/cc-square-fill.svg";
import { ReactComponent as ChatDotsFill } from "../../assets/Icons/fill/chat-dots-fill.svg";
import { ReactComponent as ChatFill } from "../../assets/Icons/fill/chat-fill.svg";
import { ReactComponent as ChatHeartFill } from "../../assets/Icons/fill/chat-heart-fill.svg";
import { ReactComponent as ChatLeftDotsFill } from "../../assets/Icons/fill/chat-left-dots-fill.svg";
import { ReactComponent as ChatLeftFill } from "../../assets/Icons/fill/chat-left-fill.svg";
import { ReactComponent as ChatLeftHeartFill } from "../../assets/Icons/fill/chat-left-heart-fill.svg";
import { ReactComponent as ChatLeftQuoteFill } from "../../assets/Icons/fill/chat-left-quote-fill.svg";
import { ReactComponent as ChatLeftTextFill } from "../../assets/Icons/fill/chat-left-text-fill.svg";
import { ReactComponent as ChatQuoteFill } from "../../assets/Icons/fill/chat-quote-fill.svg";
import { ReactComponent as ChatRightDotsFill } from "../../assets/Icons/fill/chat-right-dots-fill.svg";
import { ReactComponent as ChatRightFill } from "../../assets/Icons/fill/chat-right-fill.svg";
import { ReactComponent as ChatRightHeartFill } from "../../assets/Icons/fill/chat-right-heart-fill.svg";
import { ReactComponent as ChatRightQuoteFill } from "../../assets/Icons/fill/chat-right-quote-fill.svg";
import { ReactComponent as ChatRightTextFill } from "../../assets/Icons/fill/chat-right-text-fill.svg";
import { ReactComponent as ChatSquareDotsFill } from "../../assets/Icons/fill/chat-square-dots-fill.svg";
import { ReactComponent as ChatSquareFill } from "../../assets/Icons/fill/chat-square-fill.svg";
import { ReactComponent as ChatSquareHeartFill } from "../../assets/Icons/fill/chat-square-heart-fill.svg";
import { ReactComponent as ChatSquareQuoteFill } from "../../assets/Icons/fill/chat-square-quote-fill.svg";
import { ReactComponent as ChatSquareTextFill } from "../../assets/Icons/fill/chat-square-text-fill.svg";
import { ReactComponent as ChatTextFill } from "../../assets/Icons/fill/chat-text-fill.svg";
import { ReactComponent as CheckCircleFill } from "../../assets/Icons/fill/check-circle-fill.svg";
import { ReactComponent as CheckSquareFill } from "../../assets/Icons/fill/check-square-fill.svg";
import { ReactComponent as CircleFill } from "../../assets/Icons/fill/circle-fill.svg";
import { ReactComponent as ClipboardCheckFill } from "../../assets/Icons/fill/clipboard-check-fill.svg";
import { ReactComponent as ClipboardDataFill } from "../../assets/Icons/fill/clipboard-data-fill.svg";
import { ReactComponent as ClipboardFill } from "../../assets/Icons/fill/clipboard-fill.svg";
import { ReactComponent as ClipboardHeartFill } from "../../assets/Icons/fill/clipboard-heart-fill.svg";
import { ReactComponent as ClipboardMinusFill } from "../../assets/Icons/fill/clipboard-minus-fill.svg";
import { ReactComponent as ClipboardPlusFill } from "../../assets/Icons/fill/clipboard-plus-fill.svg";
import { ReactComponent as ClipboardXFill } from "../../assets/Icons/fill/clipboard-x-fill.svg";
import { ReactComponent as Clipboard2CheckFill } from "../../assets/Icons/fill/clipboard2-check-fill.svg";
import { ReactComponent as Clipboard2DataFill } from "../../assets/Icons/fill/clipboard2-data-fill.svg";
import { ReactComponent as Clipboard2Fill } from "../../assets/Icons/fill/clipboard2-fill.svg";
import { ReactComponent as Clipboard2HeartFill } from "../../assets/Icons/fill/clipboard2-heart-fill.svg";
import { ReactComponent as Clipboard2MinusFill } from "../../assets/Icons/fill/clipboard2-minus-fill.svg";
import { ReactComponent as Clipboard2PlusFill } from "../../assets/Icons/fill/clipboard2-plus-fill.svg";
import { ReactComponent as Clipboard2PulseFill } from "../../assets/Icons/fill/clipboard2-pulse-fill.svg";
import { ReactComponent as Clipboard2XFill } from "../../assets/Icons/fill/clipboard2-x-fill.svg";
import { ReactComponent as ClockFill } from "../../assets/Icons/fill/clock-fill.svg";
import { ReactComponent as CloudArrowDownFill } from "../../assets/Icons/fill/cloud-arrow-down-fill.svg";
import { ReactComponent as CloudArrowUpFill } from "../../assets/Icons/fill/cloud-arrow-up-fill.svg";
import { ReactComponent as CloudCheckFill } from "../../assets/Icons/fill/cloud-check-fill.svg";
import { ReactComponent as CloudDownloadFill } from "../../assets/Icons/fill/cloud-download-fill.svg";
import { ReactComponent as CloudDrizzleFill } from "../../assets/Icons/fill/cloud-drizzle-fill.svg";
import { ReactComponent as CloudFill } from "../../assets/Icons/fill/cloud-fill.svg";
import { ReactComponent as CloudFogFill } from "../../assets/Icons/fill/cloud-fog-fill.svg";
import { ReactComponent as CloudFog2Fill } from "../../assets/Icons/fill/cloud-fog2-fill.svg";
import { ReactComponent as CloudHailFill } from "../../assets/Icons/fill/cloud-hail-fill.svg";
import { ReactComponent as CloudHazeFill } from "../../assets/Icons/fill/cloud-haze-fill.svg";
import { ReactComponent as CloudHaze2Fill } from "../../assets/Icons/fill/cloud-haze2-fill.svg";
import { ReactComponent as CloudLightningFill } from "../../assets/Icons/fill/cloud-lightning-fill.svg";
import { ReactComponent as CloudLightningRainFill } from "../../assets/Icons/fill/cloud-lightning-rain-fill.svg";
import { ReactComponent as CloudMinusFill } from "../../assets/Icons/fill/cloud-minus-fill.svg";
import { ReactComponent as CloudMoonFill } from "../../assets/Icons/fill/cloud-moon-fill.svg";
import { ReactComponent as CloudPlusFill } from "../../assets/Icons/fill/cloud-plus-fill.svg";
import { ReactComponent as CloudRainFill } from "../../assets/Icons/fill/cloud-rain-fill.svg";
import { ReactComponent as CloudRainHeavyFill } from "../../assets/Icons/fill/cloud-rain-heavy-fill.svg";
import { ReactComponent as CloudSlashFill } from "../../assets/Icons/fill/cloud-slash-fill.svg";
import { ReactComponent as CloudSleetFill } from "../../assets/Icons/fill/cloud-sleet-fill.svg";
import { ReactComponent as CloudSnowFill } from "../../assets/Icons/fill/cloud-snow-fill.svg";
import { ReactComponent as CloudSunFill } from "../../assets/Icons/fill/cloud-sun-fill.svg";
import { ReactComponent as CloudUploadFill } from "../../assets/Icons/fill/cloud-upload-fill.svg";
import { ReactComponent as CloudsFill } from "../../assets/Icons/fill/clouds-fill.svg";
import { ReactComponent as CloudyFill } from "../../assets/Icons/fill/cloudy-fill.svg";
import { ReactComponent as CollectionFill } from "../../assets/Icons/fill/collection-fill.svg";
import { ReactComponent as CollectionPlayFill } from "../../assets/Icons/fill/collection-play-fill.svg";
import { ReactComponent as CompassFill } from "../../assets/Icons/fill/compass-fill.svg";
import { ReactComponent as CpuFill } from "../../assets/Icons/fill/cpu-fill.svg";
import { ReactComponent as CreditCard2BackFill } from "../../assets/Icons/fill/credit-card-2-back-fill.svg";
import { ReactComponent as CreditCard2FrontFill } from "../../assets/Icons/fill/credit-card-2-front-fill.svg";
import { ReactComponent as CreditCardFill } from "../../assets/Icons/fill/credit-card-fill.svg";
import { ReactComponent as CupFill } from "../../assets/Icons/fill/cup-fill.svg";
import { ReactComponent as CupHotFill } from "../../assets/Icons/fill/cup-hot-fill.svg";
import { ReactComponent as CursorFill } from "../../assets/Icons/fill/cursor-fill.svg";
import { ReactComponent as DashCircleFill } from "../../assets/Icons/fill/dash-circle-fill.svg";
import { ReactComponent as DashSquareFill } from "../../assets/Icons/fill/dash-square-fill.svg";
import { ReactComponent as DatabaseFillAdd } from "../../assets/Icons/fill/database-fill-add.svg";
import { ReactComponent as DatabaseFillCheck } from "../../assets/Icons/fill/database-fill-check.svg";
import { ReactComponent as DatabaseFillDash } from "../../assets/Icons/fill/database-fill-dash.svg";
import { ReactComponent as DatabaseFillDown } from "../../assets/Icons/fill/database-fill-down.svg";
import { ReactComponent as DatabaseFillExclamation } from "../../assets/Icons/fill/database-fill-exclamation.svg";
import { ReactComponent as DatabaseFillGear } from "../../assets/Icons/fill/database-fill-gear.svg";
import { ReactComponent as DatabaseFillLock } from "../../assets/Icons/fill/database-fill-lock.svg";
import { ReactComponent as DatabaseFillSlash } from "../../assets/Icons/fill/database-fill-slash.svg";
import { ReactComponent as DatabaseFillUp } from "../../assets/Icons/fill/database-fill-up.svg";
import { ReactComponent as DatabaseFillX } from "../../assets/Icons/fill/database-fill-x.svg";
import { ReactComponent as DatabaseFill } from "../../assets/Icons/fill/database-fill.svg";
import { ReactComponent as DeviceHddFill } from "../../assets/Icons/fill/device-hdd-fill.svg";
import { ReactComponent as DeviceSsdFill } from "../../assets/Icons/fill/device-ssd-fill.svg";
import { ReactComponent as Diagram2Fill } from "../../assets/Icons/fill/diagram-2-fill.svg";
import { ReactComponent as Diagram3Fill } from "../../assets/Icons/fill/diagram-3-fill.svg";
import { ReactComponent as DiamondFill } from "../../assets/Icons/fill/diamond-fill.svg";
import { ReactComponent as Dice1Fill } from "../../assets/Icons/fill/dice-1-fill.svg";
import { ReactComponent as Dice2Fill } from "../../assets/Icons/fill/dice-2-fill.svg";
import { ReactComponent as Dice3Fill } from "../../assets/Icons/fill/dice-3-fill.svg";
import { ReactComponent as Dice4Fill } from "../../assets/Icons/fill/dice-4-fill.svg";
import { ReactComponent as Dice5Fill } from "../../assets/Icons/fill/dice-5-fill.svg";
import { ReactComponent as Dice6Fill } from "../../assets/Icons/fill/dice-6-fill.svg";
import { ReactComponent as DiscFill } from "../../assets/Icons/fill/disc-fill.svg";
import { ReactComponent as DisplayFill } from "../../assets/Icons/fill/display-fill.svg";
import { ReactComponent as DisplayportFill } from "../../assets/Icons/fill/displayport-fill.svg";
import { ReactComponent as DoorClosedFill } from "../../assets/Icons/fill/door-closed-fill.svg";
import { ReactComponent as DoorOpenFill } from "../../assets/Icons/fill/door-open-fill.svg";
import { ReactComponent as DpadFill } from "../../assets/Icons/fill/dpad-fill.svg";
import { ReactComponent as DropletFill } from "../../assets/Icons/fill/droplet-fill.svg";
import { ReactComponent as EarFill } from "../../assets/Icons/fill/ear-fill.svg";
import { ReactComponent as EaselFill } from "../../assets/Icons/fill/easel-fill.svg";
import { ReactComponent as Easel2Fill } from "../../assets/Icons/fill/easel2-fill.svg";
import { ReactComponent as Easel3Fill } from "../../assets/Icons/fill/easel3-fill.svg";
import { ReactComponent as EggFill } from "../../assets/Icons/fill/egg-fill.svg";
import { ReactComponent as EjectFill } from "../../assets/Icons/fill/eject-fill.svg";
import { ReactComponent as EmojiAngryFill } from "../../assets/Icons/fill/emoji-angry-fill.svg";
import { ReactComponent as EmojiDizzyFill } from "../../assets/Icons/fill/emoji-dizzy-fill.svg";
import { ReactComponent as EmojiExpressionlessFill } from "../../assets/Icons/fill/emoji-expressionless-fill.svg";
import { ReactComponent as EmojiFrownFill } from "../../assets/Icons/fill/emoji-frown-fill.svg";
import { ReactComponent as EmojiHeartEyesFill } from "../../assets/Icons/fill/emoji-heart-eyes-fill.svg";
import { ReactComponent as EmojiKissFill } from "../../assets/Icons/fill/emoji-kiss-fill.svg";
import { ReactComponent as EmojiLaughingFill } from "../../assets/Icons/fill/emoji-laughing-fill.svg";
import { ReactComponent as EmojiNeutralFill } from "../../assets/Icons/fill/emoji-neutral-fill.svg";
import { ReactComponent as EmojiSmileFill } from "../../assets/Icons/fill/emoji-smile-fill.svg";
import { ReactComponent as EmojiSmileUpsideDownFill } from "../../assets/Icons/fill/emoji-smile-upside-down-fill.svg";
import { ReactComponent as EmojiSunglassesFill } from "../../assets/Icons/fill/emoji-sunglasses-fill.svg";
import { ReactComponent as EmojiWinkFill } from "../../assets/Icons/fill/emoji-wink-fill.svg";
import { ReactComponent as EnvelopeAtFill } from "../../assets/Icons/fill/envelope-at-fill.svg";
import { ReactComponent as EnvelopeCheckFill } from "../../assets/Icons/fill/envelope-check-fill.svg";
import { ReactComponent as EnvelopeDashFill } from "../../assets/Icons/fill/envelope-dash-fill.svg";
import { ReactComponent as EnvelopeExclamationFill } from "../../assets/Icons/fill/envelope-exclamation-fill.svg";
import { ReactComponent as EnvelopeFill } from "../../assets/Icons/fill/envelope-fill.svg";
import { ReactComponent as EnvelopeHeartFill } from "../../assets/Icons/fill/envelope-heart-fill.svg";
import { ReactComponent as EnvelopeOpenFill } from "../../assets/Icons/fill/envelope-open-fill.svg";
import { ReactComponent as EnvelopeOpenHeartFill } from "../../assets/Icons/fill/envelope-open-heart-fill.svg";
import { ReactComponent as EnvelopePaperFill } from "../../assets/Icons/fill/envelope-paper-fill.svg";
import { ReactComponent as EnvelopePaperHeartFill } from "../../assets/Icons/fill/envelope-paper-heart-fill.svg";
import { ReactComponent as EnvelopePlusFill } from "../../assets/Icons/fill/envelope-plus-fill.svg";
import { ReactComponent as EnvelopeSlashFill } from "../../assets/Icons/fill/envelope-slash-fill.svg";
import { ReactComponent as EnvelopeXFill } from "../../assets/Icons/fill/envelope-x-fill.svg";
import { ReactComponent as EraserFill } from "../../assets/Icons/fill/eraser-fill.svg";
import { ReactComponent as EvFrontFill } from "../../assets/Icons/fill/ev-front-fill.svg";
import { ReactComponent as EvStationFill } from "../../assets/Icons/fill/ev-station-fill.svg";
import { ReactComponent as ExclamationCircleFill } from "../../assets/Icons/fill/exclamation-circle-fill.svg";
import { ReactComponent as ExclamationDiamondFill } from "../../assets/Icons/fill/exclamation-diamond-fill.svg";
import { ReactComponent as ExclamationOctagonFill } from "../../assets/Icons/fill/exclamation-octagon-fill.svg";
import { ReactComponent as ExclamationSquareFill } from "../../assets/Icons/fill/exclamation-square-fill.svg";
import { ReactComponent as ExclamationTriangleFill } from "../../assets/Icons/fill/exclamation-triangle-fill.svg";
import { ReactComponent as ExplicitFill } from "../../assets/Icons/fill/explicit-fill.svg";
import { ReactComponent as EyeFill } from "../../assets/Icons/fill/eye-fill.svg";
import { ReactComponent as EyeSlashFill } from "../../assets/Icons/fill/eye-slash-fill.svg";
import { ReactComponent as FastForwardBtnFill } from "../../assets/Icons/fill/fast-forward-btn-fill.svg";
import { ReactComponent as FastForwardCircleFill } from "../../assets/Icons/fill/fast-forward-circle-fill.svg";
import { ReactComponent as FastForwardFill } from "../../assets/Icons/fill/fast-forward-fill.svg";
import { ReactComponent as FileArrowDownFill } from "../../assets/Icons/fill/file-arrow-down-fill.svg";
import { ReactComponent as FileArrowUpFill } from "../../assets/Icons/fill/file-arrow-up-fill.svg";
import { ReactComponent as FileBarGraphFill } from "../../assets/Icons/fill/file-bar-graph-fill.svg";
import { ReactComponent as FileBinaryFill } from "../../assets/Icons/fill/file-binary-fill.svg";
import { ReactComponent as FileBreakFill } from "../../assets/Icons/fill/file-break-fill.svg";
import { ReactComponent as FileCheckFill } from "../../assets/Icons/fill/file-check-fill.svg";
import { ReactComponent as FileCodeFill } from "../../assets/Icons/fill/file-code-fill.svg";
import { ReactComponent as FileDiffFill } from "../../assets/Icons/fill/file-diff-fill.svg";
import { ReactComponent as FileEarmarkArrowDownFill } from "../../assets/Icons/fill/file-earmark-arrow-down-fill.svg";
import { ReactComponent as FileEarmarkArrowUpFill } from "../../assets/Icons/fill/file-earmark-arrow-up-fill.svg";
import { ReactComponent as FileEarmarkBarGraphFill } from "../../assets/Icons/fill/file-earmark-bar-graph-fill.svg";
import { ReactComponent as FileEarmarkBinaryFill } from "../../assets/Icons/fill/file-earmark-binary-fill.svg";
import { ReactComponent as FileEarmarkBreakFill } from "../../assets/Icons/fill/file-earmark-break-fill.svg";
import { ReactComponent as FileEarmarkCheckFill } from "../../assets/Icons/fill/file-earmark-check-fill.svg";
import { ReactComponent as FileEarmarkCodeFill } from "../../assets/Icons/fill/file-earmark-code-fill.svg";
import { ReactComponent as FileEarmarkDiffFill } from "../../assets/Icons/fill/file-earmark-diff-fill.svg";
import { ReactComponent as FileEarmarkEaselFill } from "../../assets/Icons/fill/file-earmark-easel-fill.svg";
import { ReactComponent as FileEarmarkExcelFill } from "../../assets/Icons/fill/file-earmark-excel-fill.svg";
import { ReactComponent as FileEarmarkFill } from "../../assets/Icons/fill/file-earmark-fill.svg";
import { ReactComponent as FileEarmarkFontFill } from "../../assets/Icons/fill/file-earmark-font-fill.svg";
import { ReactComponent as FileEarmarkImageFill } from "../../assets/Icons/fill/file-earmark-image-fill.svg";
import { ReactComponent as FileEarmarkLockFill } from "../../assets/Icons/fill/file-earmark-lock-fill.svg";
import { ReactComponent as FileEarmarkLock2Fill } from "../../assets/Icons/fill/file-earmark-lock2-fill.svg";
import { ReactComponent as FileEarmarkMedicalFill } from "../../assets/Icons/fill/file-earmark-medical-fill.svg";
import { ReactComponent as FileEarmarkMinusFill } from "../../assets/Icons/fill/file-earmark-minus-fill.svg";
import { ReactComponent as FileEarmarkMusicFill } from "../../assets/Icons/fill/file-earmark-music-fill.svg";
import { ReactComponent as FileEarmarkPdfFill } from "../../assets/Icons/fill/file-earmark-pdf-fill.svg";
import { ReactComponent as FileEarmarkPersonFill } from "../../assets/Icons/fill/file-earmark-person-fill.svg";
import { ReactComponent as FileEarmarkPlayFill } from "../../assets/Icons/fill/file-earmark-play-fill.svg";
import { ReactComponent as FileEarmarkPlusFill } from "../../assets/Icons/fill/file-earmark-plus-fill.svg";
import { ReactComponent as FileEarmarkPostFill } from "../../assets/Icons/fill/file-earmark-post-fill.svg";
import { ReactComponent as FileEarmarkPptFill } from "../../assets/Icons/fill/file-earmark-ppt-fill.svg";
import { ReactComponent as FileEarmarkRichtextFill } from "../../assets/Icons/fill/file-earmark-richtext-fill.svg";
import { ReactComponent as FileEarmarkRuledFill } from "../../assets/Icons/fill/file-earmark-ruled-fill.svg";
import { ReactComponent as FileEarmarkSlidesFill } from "../../assets/Icons/fill/file-earmark-slides-fill.svg";
import { ReactComponent as FileEarmarkSpreadsheetFill } from "../../assets/Icons/fill/file-earmark-spreadsheet-fill.svg";
import { ReactComponent as FileEarmarkTextFill } from "../../assets/Icons/fill/file-earmark-text-fill.svg";
import { ReactComponent as FileEarmarkWordFill } from "../../assets/Icons/fill/file-earmark-word-fill.svg";
import { ReactComponent as FileEarmarkXFill } from "../../assets/Icons/fill/file-earmark-x-fill.svg";
import { ReactComponent as FileEarmarkZipFill } from "../../assets/Icons/fill/file-earmark-zip-fill.svg";
import { ReactComponent as FileEaselFill } from "../../assets/Icons/fill/file-easel-fill.svg";
import { ReactComponent as FileExcelFill } from "../../assets/Icons/fill/file-excel-fill.svg";
import { ReactComponent as FileFill } from "../../assets/Icons/fill/file-fill.svg";
import { ReactComponent as FileFontFill } from "../../assets/Icons/fill/file-font-fill.svg";
import { ReactComponent as FileImageFill } from "../../assets/Icons/fill/file-image-fill.svg";
import { ReactComponent as FileLockFill } from "../../assets/Icons/fill/file-lock-fill.svg";
import { ReactComponent as FileLock2Fill } from "../../assets/Icons/fill/file-lock2-fill.svg";
import { ReactComponent as FileMedicalFill } from "../../assets/Icons/fill/file-medical-fill.svg";
import { ReactComponent as FileMinusFill } from "../../assets/Icons/fill/file-minus-fill.svg";
import { ReactComponent as FileMusicFill } from "../../assets/Icons/fill/file-music-fill.svg";
import { ReactComponent as FilePdfFill } from "../../assets/Icons/fill/file-pdf-fill.svg";
import { ReactComponent as FilePersonFill } from "../../assets/Icons/fill/file-person-fill.svg";
import { ReactComponent as FilePlayFill } from "../../assets/Icons/fill/file-play-fill.svg";
import { ReactComponent as FilePlusFill } from "../../assets/Icons/fill/file-plus-fill.svg";
import { ReactComponent as FilePostFill } from "../../assets/Icons/fill/file-post-fill.svg";
import { ReactComponent as FilePptFill } from "../../assets/Icons/fill/file-ppt-fill.svg";
import { ReactComponent as FileRichtextFill } from "../../assets/Icons/fill/file-richtext-fill.svg";
import { ReactComponent as FileRuledFill } from "../../assets/Icons/fill/file-ruled-fill.svg";
import { ReactComponent as FileSlidesFill } from "../../assets/Icons/fill/file-slides-fill.svg";
import { ReactComponent as FileSpreadsheetFill } from "../../assets/Icons/fill/file-spreadsheet-fill.svg";
import { ReactComponent as FileTextFill } from "../../assets/Icons/fill/file-text-fill.svg";
import { ReactComponent as FileWordFill } from "../../assets/Icons/fill/file-word-fill.svg";
import { ReactComponent as FileXFill } from "../../assets/Icons/fill/file-x-fill.svg";
import { ReactComponent as FileZipFill } from "../../assets/Icons/fill/file-zip-fill.svg";
import { ReactComponent as FilterCircleFill } from "../../assets/Icons/fill/filter-circle-fill.svg";
import { ReactComponent as FilterSquareFill } from "../../assets/Icons/fill/filter-square-fill.svg";
import { ReactComponent as FlagFill } from "../../assets/Icons/fill/flag-fill.svg";
import { ReactComponent as FolderFill } from "../../assets/Icons/fill/folder-fill.svg";
import { ReactComponent as FolderSymlinkFill } from "../../assets/Icons/fill/folder-symlink-fill.svg";
import { ReactComponent as ForwardFill } from "../../assets/Icons/fill/forward-fill.svg";
import { ReactComponent as FuelPumpDieselFill } from "../../assets/Icons/fill/fuel-pump-diesel-fill.svg";
import { ReactComponent as FuelPumpFill } from "../../assets/Icons/fill/fuel-pump-fill.svg";
import { ReactComponent as FunnelFill } from "../../assets/Icons/fill/funnel-fill.svg";
import { ReactComponent as GearFill } from "../../assets/Icons/fill/gear-fill.svg";
import { ReactComponent as GeoAltFill } from "../../assets/Icons/fill/geo-alt-fill.svg";
import { ReactComponent as GeoFill } from "../../assets/Icons/fill/geo-fill.svg";
import { ReactComponent as GiftFill } from "../../assets/Icons/fill/gift-fill.svg";
import { ReactComponent as Grid1x2Fill } from "../../assets/Icons/fill/grid-1x2-fill.svg";
import { ReactComponent as Grid3x2GapFill } from "../../assets/Icons/fill/grid-3x2-gap-fill.svg";
import { ReactComponent as Grid3x3GapFill } from "../../assets/Icons/fill/grid-3x3-gap-fill.svg";
import { ReactComponent as GridFill } from "../../assets/Icons/fill/grid-fill.svg";
import { ReactComponent as HCircleFill } from "../../assets/Icons/fill/h-circle-fill.svg";
import { ReactComponent as HSquareFill } from "../../assets/Icons/fill/h-square-fill.svg";
import { ReactComponent as HandIndexFill } from "../../assets/Icons/fill/hand-index-fill.svg";
import { ReactComponent as HandIndexThumbFill } from "../../assets/Icons/fill/hand-index-thumb-fill.svg";
import { ReactComponent as HandThumbsDownFill } from "../../assets/Icons/fill/hand-thumbs-down-fill.svg";
import { ReactComponent as HandThumbsUpFill } from "../../assets/Icons/fill/hand-thumbs-up-fill.svg";
import { ReactComponent as HandbagFill } from "../../assets/Icons/fill/handbag-fill.svg";
import { ReactComponent as HddFill } from "../../assets/Icons/fill/hdd-fill.svg";
import { ReactComponent as HddNetworkFill } from "../../assets/Icons/fill/hdd-network-fill.svg";
import { ReactComponent as HddRackFill } from "../../assets/Icons/fill/hdd-rack-fill.svg";
import { ReactComponent as HddStackFill } from "../../assets/Icons/fill/hdd-stack-fill.svg";
import { ReactComponent as HdmiFill } from "../../assets/Icons/fill/hdmi-fill.svg";
import { ReactComponent as HeartFill } from "../../assets/Icons/fill/heart-fill.svg";
import { ReactComponent as HeartPulseFill } from "../../assets/Icons/fill/heart-pulse-fill.svg";
import { ReactComponent as HeartbreakFill } from "../../assets/Icons/fill/heartbreak-fill.svg";
import { ReactComponent as HeptagonFill } from "../../assets/Icons/fill/heptagon-fill.svg";
import { ReactComponent as HexagonFill } from "../../assets/Icons/fill/hexagon-fill.svg";
import { ReactComponent as HospitalFill } from "../../assets/Icons/fill/hospital-fill.svg";
import { ReactComponent as HouseAddFill } from "../../assets/Icons/fill/house-add-fill.svg";
import { ReactComponent as HouseCheckFill } from "../../assets/Icons/fill/house-check-fill.svg";
import { ReactComponent as HouseDashFill } from "../../assets/Icons/fill/house-dash-fill.svg";
import { ReactComponent as HouseDoorFill } from "../../assets/Icons/fill/house-door-fill.svg";
import { ReactComponent as HouseDownFill } from "../../assets/Icons/fill/house-down-fill.svg";
import { ReactComponent as HouseExclamationFill } from "../../assets/Icons/fill/house-exclamation-fill.svg";
import { ReactComponent as HouseFill } from "../../assets/Icons/fill/house-fill.svg";
import { ReactComponent as HouseGearFill } from "../../assets/Icons/fill/house-gear-fill.svg";
import { ReactComponent as HouseHeartFill } from "../../assets/Icons/fill/house-heart-fill.svg";
import { ReactComponent as HouseLockFill } from "../../assets/Icons/fill/house-lock-fill.svg";
import { ReactComponent as HouseSlashFill } from "../../assets/Icons/fill/house-slash-fill.svg";
import { ReactComponent as HouseUpFill } from "../../assets/Icons/fill/house-up-fill.svg";
import { ReactComponent as HouseXFill } from "../../assets/Icons/fill/house-x-fill.svg";
import { ReactComponent as HousesFill } from "../../assets/Icons/fill/houses-fill.svg";
import { ReactComponent as ImageFill } from "../../assets/Icons/fill/image-fill.svg";
import { ReactComponent as InboxFill } from "../../assets/Icons/fill/inbox-fill.svg";
import { ReactComponent as InboxesFill } from "../../assets/Icons/fill/inboxes-fill.svg";
import { ReactComponent as InfoCircleFill } from "../../assets/Icons/fill/info-circle-fill.svg";
import { ReactComponent as InfoSquareFill } from "../../assets/Icons/fill/info-square-fill.svg";
import { ReactComponent as JournalBookmarkFill } from "../../assets/Icons/fill/journal-bookmark-fill.svg";
import { ReactComponent as KanbanFill } from "../../assets/Icons/fill/kanban-fill.svg";
import { ReactComponent as KeyFill } from "../../assets/Icons/fill/key-fill.svg";
import { ReactComponent as KeyboardFill } from "../../assets/Icons/fill/keyboard-fill.svg";
import { ReactComponent as LampFill } from "../../assets/Icons/fill/lamp-fill.svg";
import { ReactComponent as LaptopFill } from "../../assets/Icons/fill/laptop-fill.svg";
import { ReactComponent as LayersFill } from "../../assets/Icons/fill/layers-fill.svg";
import { ReactComponent as LightbulbFill } from "../../assets/Icons/fill/lightbulb-fill.svg";
import { ReactComponent as LightbulbOffFill } from "../../assets/Icons/fill/lightbulb-off-fill.svg";
import { ReactComponent as LightningChargeFill } from "../../assets/Icons/fill/lightning-charge-fill.svg";
import { ReactComponent as LightningFill } from "../../assets/Icons/fill/lightning-fill.svg";
import { ReactComponent as LockFill } from "../../assets/Icons/fill/lock-fill.svg";
import { ReactComponent as LungsFill } from "../../assets/Icons/fill/lungs-fill.svg";
import { ReactComponent as MagnetFill } from "../../assets/Icons/fill/magnet-fill.svg";
import { ReactComponent as MapFill } from "../../assets/Icons/fill/map-fill.svg";
import { ReactComponent as MarkdownFill } from "../../assets/Icons/fill/markdown-fill.svg";
import { ReactComponent as MegaphoneFill } from "../../assets/Icons/fill/megaphone-fill.svg";
import { ReactComponent as MenuAppFill } from "../../assets/Icons/fill/menu-app-fill.svg";
import { ReactComponent as MenuButtonFill } from "../../assets/Icons/fill/menu-button-fill.svg";
import { ReactComponent as MenuButtonWideFill } from "../../assets/Icons/fill/menu-button-wide-fill.svg";
import { ReactComponent as MicFill } from "../../assets/Icons/fill/mic-fill.svg";
import { ReactComponent as MicMuteFill } from "../../assets/Icons/fill/mic-mute-fill.svg";
import { ReactComponent as ModemFill } from "../../assets/Icons/fill/modem-fill.svg";
import { ReactComponent as MoonFill } from "../../assets/Icons/fill/moon-fill.svg";
import { ReactComponent as MoonStarsFill } from "../../assets/Icons/fill/moon-stars-fill.svg";
import { ReactComponent as MortarboardFill } from "../../assets/Icons/fill/mortarboard-fill.svg";
import { ReactComponent as MotherboardFill } from "../../assets/Icons/fill/motherboard-fill.svg";
import { ReactComponent as MouseFill } from "../../assets/Icons/fill/mouse-fill.svg";
import { ReactComponent as Mouse2Fill } from "../../assets/Icons/fill/mouse2-fill.svg";
import { ReactComponent as Mouse3Fill } from "../../assets/Icons/fill/mouse3-fill.svg";
import { ReactComponent as MusicPlayerFill } from "../../assets/Icons/fill/music-player-fill.svg";
import { ReactComponent as NodeMinusFill } from "../../assets/Icons/fill/node-minus-fill.svg";
import { ReactComponent as NodePlusFill } from "../../assets/Icons/fill/node-plus-fill.svg";
import { ReactComponent as NutFill } from "../../assets/Icons/fill/nut-fill.svg";
import { ReactComponent as OctagonFill } from "../../assets/Icons/fill/octagon-fill.svg";
import { ReactComponent as OpticalAudioFill } from "../../assets/Icons/fill/optical-audio-fill.svg";
import { ReactComponent as PCircleFill } from "../../assets/Icons/fill/p-circle-fill.svg";
import { ReactComponent as PSquareFill } from "../../assets/Icons/fill/p-square-fill.svg";
import { ReactComponent as PaletteFill } from "../../assets/Icons/fill/palette-fill.svg";
import { ReactComponent as PassFill } from "../../assets/Icons/fill/pass-fill.svg";
import { ReactComponent as PatchCheckFill } from "../../assets/Icons/fill/patch-check-fill.svg";
import { ReactComponent as PatchExclamationFill } from "../../assets/Icons/fill/patch-exclamation-fill.svg";
import { ReactComponent as PatchMinusFill } from "../../assets/Icons/fill/patch-minus-fill.svg";
import { ReactComponent as PatchPlusFill } from "../../assets/Icons/fill/patch-plus-fill.svg";
import { ReactComponent as PatchQuestionFill } from "../../assets/Icons/fill/patch-question-fill.svg";
import { ReactComponent as PauseBtnFill } from "../../assets/Icons/fill/pause-btn-fill.svg";
import { ReactComponent as PauseCircleFill } from "../../assets/Icons/fill/pause-circle-fill.svg";
import { ReactComponent as PauseFill } from "../../assets/Icons/fill/pause-fill.svg";
import { ReactComponent as PeaceFill } from "../../assets/Icons/fill/peace-fill.svg";
import { ReactComponent as PenFill } from "../../assets/Icons/fill/pen-fill.svg";
import { ReactComponent as PencilFill } from "../../assets/Icons/fill/pencil-fill.svg";
import { ReactComponent as PentagonFill } from "../../assets/Icons/fill/pentagon-fill.svg";
import { ReactComponent as PeopleFill } from "../../assets/Icons/fill/people-fill.svg";
import { ReactComponent as PersonBadgeFill } from "../../assets/Icons/fill/person-badge-fill.svg";
import { ReactComponent as PersonCheckFill } from "../../assets/Icons/fill/person-check-fill.svg";
import { ReactComponent as PersonDashFill } from "../../assets/Icons/fill/person-dash-fill.svg";
import { ReactComponent as PersonFillAdd } from "../../assets/Icons/fill/person-fill-add.svg";
import { ReactComponent as PersonFillCheck } from "../../assets/Icons/fill/person-fill-check.svg";
import { ReactComponent as PersonFillDash } from "../../assets/Icons/fill/person-fill-dash.svg";
import { ReactComponent as PersonFillDown } from "../../assets/Icons/fill/person-fill-down.svg";
import { ReactComponent as PersonFillExclamation } from "../../assets/Icons/fill/person-fill-exclamation.svg";
import { ReactComponent as PersonFillGear } from "../../assets/Icons/fill/person-fill-gear.svg";
import { ReactComponent as PersonFillLock } from "../../assets/Icons/fill/person-fill-lock.svg";
import { ReactComponent as PersonFillSlash } from "../../assets/Icons/fill/person-fill-slash.svg";
import { ReactComponent as PersonFillUp } from "../../assets/Icons/fill/person-fill-up.svg";
import { ReactComponent as PersonFillX } from "../../assets/Icons/fill/person-fill-x.svg";
import { ReactComponent as PersonFill } from "../../assets/Icons/fill/person-fill.svg";
import { ReactComponent as PersonLinesFill } from "../../assets/Icons/fill/person-lines-fill.svg";
import { ReactComponent as PersonPlusFill } from "../../assets/Icons/fill/person-plus-fill.svg";
import { ReactComponent as PersonVcardFill } from "../../assets/Icons/fill/person-vcard-fill.svg";
import { ReactComponent as PersonXFill } from "../../assets/Icons/fill/person-x-fill.svg";
import { ReactComponent as PhoneFill } from "../../assets/Icons/fill/phone-fill.svg";
import { ReactComponent as PhoneLandscapeFill } from "../../assets/Icons/fill/phone-landscape-fill.svg";
import { ReactComponent as PhoneVibrateFill } from "../../assets/Icons/fill/phone-vibrate-fill.svg";
import { ReactComponent as PieChartFill } from "../../assets/Icons/fill/pie-chart-fill.svg";
import { ReactComponent as PiggyBankFill } from "../../assets/Icons/fill/piggy-bank-fill.svg";
import { ReactComponent as PinAngleFill } from "../../assets/Icons/fill/pin-angle-fill.svg";
import { ReactComponent as PinFill } from "../../assets/Icons/fill/pin-fill.svg";
import { ReactComponent as PinMapFill } from "../../assets/Icons/fill/pin-map-fill.svg";
import { ReactComponent as PipFill } from "../../assets/Icons/fill/pip-fill.svg";
import { ReactComponent as PlayBtnFill } from "../../assets/Icons/fill/play-btn-fill.svg";
import { ReactComponent as PlayCircleFill } from "../../assets/Icons/fill/play-circle-fill.svg";
import { ReactComponent as PlayFill } from "../../assets/Icons/fill/play-fill.svg";
import { ReactComponent as PlugFill } from "../../assets/Icons/fill/plug-fill.svg";
import { ReactComponent as PlusCircleFill } from "../../assets/Icons/fill/plus-circle-fill.svg";
import { ReactComponent as PlusSquareFill } from "../../assets/Icons/fill/plus-square-fill.svg";
import { ReactComponent as PostageFill } from "../../assets/Icons/fill/postage-fill.svg";
import { ReactComponent as PostageHeartFill } from "../../assets/Icons/fill/postage-heart-fill.svg";
import { ReactComponent as PostcardFill } from "../../assets/Icons/fill/postcard-fill.svg";
import { ReactComponent as PostcardHeartFill } from "../../assets/Icons/fill/postcard-heart-fill.svg";
import { ReactComponent as PrinterFill } from "../../assets/Icons/fill/printer-fill.svg";
import { ReactComponent as ProjectorFill } from "../../assets/Icons/fill/projector-fill.svg";
import { ReactComponent as PuzzleFill } from "../../assets/Icons/fill/puzzle-fill.svg";
import { ReactComponent as QuestionCircleFill } from "../../assets/Icons/fill/question-circle-fill.svg";
import { ReactComponent as QuestionDiamondFill } from "../../assets/Icons/fill/question-diamond-fill.svg";
import { ReactComponent as QuestionOctagonFill } from "../../assets/Icons/fill/question-octagon-fill.svg";
import { ReactComponent as QuestionSquareFill } from "../../assets/Icons/fill/question-square-fill.svg";
import { ReactComponent as RCircleFill } from "../../assets/Icons/fill/r-circle-fill.svg";
import { ReactComponent as RSquareFill } from "../../assets/Icons/fill/r-square-fill.svg";
import { ReactComponent as RecordBtnFill } from "../../assets/Icons/fill/record-btn-fill.svg";
import { ReactComponent as RecordCircleFill } from "../../assets/Icons/fill/record-circle-fill.svg";
import { ReactComponent as RecordFill } from "../../assets/Icons/fill/record-fill.svg";
import { ReactComponent as Record2Fill } from "../../assets/Icons/fill/record2-fill.svg";
import { ReactComponent as ReplyAllFill } from "../../assets/Icons/fill/reply-all-fill.svg";
import { ReactComponent as ReplyFill } from "../../assets/Icons/fill/reply-fill.svg";
import { ReactComponent as RewindBtnFill } from "../../assets/Icons/fill/rewind-btn-fill.svg";
import { ReactComponent as RewindCircleFill } from "../../assets/Icons/fill/rewind-circle-fill.svg";
import { ReactComponent as RewindFill } from "../../assets/Icons/fill/rewind-fill.svg";
import { ReactComponent as RocketFill } from "../../assets/Icons/fill/rocket-fill.svg";
import { ReactComponent as RocketTakeoffFill } from "../../assets/Icons/fill/rocket-takeoff-fill.svg";
import { ReactComponent as RouterFill } from "../../assets/Icons/fill/router-fill.svg";
import { ReactComponent as RssFill } from "../../assets/Icons/fill/rss-fill.svg";
import { ReactComponent as SafeFill } from "../../assets/Icons/fill/safe-fill.svg";
import { ReactComponent as Safe2Fill } from "../../assets/Icons/fill/safe2-fill.svg";
import { ReactComponent as SaveFill } from "../../assets/Icons/fill/save-fill.svg";
import { ReactComponent as Save2Fill } from "../../assets/Icons/fill/save2-fill.svg";
import { ReactComponent as SdCardFill } from "../../assets/Icons/fill/sd-card-fill.svg";
import { ReactComponent as SearchHeartFill } from "../../assets/Icons/fill/search-heart-fill.svg";
import { ReactComponent as SendCheckFill } from "../../assets/Icons/fill/send-check-fill.svg";
import { ReactComponent as SendDashFill } from "../../assets/Icons/fill/send-dash-fill.svg";
import { ReactComponent as SendExclamationFill } from "../../assets/Icons/fill/send-exclamation-fill.svg";
import { ReactComponent as SendFill } from "../../assets/Icons/fill/send-fill.svg";
import { ReactComponent as SendPlusFill } from "../../assets/Icons/fill/send-plus-fill.svg";
import { ReactComponent as SendSlashFill } from "../../assets/Icons/fill/send-slash-fill.svg";
import { ReactComponent as SendXFill } from "../../assets/Icons/fill/send-x-fill.svg";
import { ReactComponent as ShareFill } from "../../assets/Icons/fill/share-fill.svg";
import { ReactComponent as ShieldFillCheck } from "../../assets/Icons/fill/shield-fill-check.svg";
import { ReactComponent as ShieldFillExclamation } from "../../assets/Icons/fill/shield-fill-exclamation.svg";
import { ReactComponent as ShieldFillMinus } from "../../assets/Icons/fill/shield-fill-minus.svg";
import { ReactComponent as ShieldFillPlus } from "../../assets/Icons/fill/shield-fill-plus.svg";
import { ReactComponent as ShieldFillX } from "../../assets/Icons/fill/shield-fill-x.svg";
import { ReactComponent as ShieldFill } from "../../assets/Icons/fill/shield-fill.svg";
import { ReactComponent as ShieldLockFill } from "../../assets/Icons/fill/shield-lock-fill.svg";
import { ReactComponent as ShieldSlashFill } from "../../assets/Icons/fill/shield-slash-fill.svg";
import { ReactComponent as ShiftFill } from "../../assets/Icons/fill/shift-fill.svg";
import { ReactComponent as SignDeadEndFill } from "../../assets/Icons/fill/sign-dead-end-fill.svg";
import { ReactComponent as SignDoNotEnterFill } from "../../assets/Icons/fill/sign-do-not-enter-fill.svg";
import { ReactComponent as SignIntersectionFill } from "../../assets/Icons/fill/sign-intersection-fill.svg";
import { ReactComponent as SignIntersectionSideFill } from "../../assets/Icons/fill/sign-intersection-side-fill.svg";
import { ReactComponent as SignIntersectionTFill } from "../../assets/Icons/fill/sign-intersection-t-fill.svg";
import { ReactComponent as SignIntersectionYFill } from "../../assets/Icons/fill/sign-intersection-y-fill.svg";
import { ReactComponent as SignMergeLeftFill } from "../../assets/Icons/fill/sign-merge-left-fill.svg";
import { ReactComponent as SignMergeRightFill } from "../../assets/Icons/fill/sign-merge-right-fill.svg";
import { ReactComponent as SignNoLeftTurnFill } from "../../assets/Icons/fill/sign-no-left-turn-fill.svg";
import { ReactComponent as SignNoParkingFill } from "../../assets/Icons/fill/sign-no-parking-fill.svg";
import { ReactComponent as SignNoRightTurnFill } from "../../assets/Icons/fill/sign-no-right-turn-fill.svg";
import { ReactComponent as SignRailroadFill } from "../../assets/Icons/fill/sign-railroad-fill.svg";
import { ReactComponent as SignStopFill } from "../../assets/Icons/fill/sign-stop-fill.svg";
import { ReactComponent as SignStopLightsFill } from "../../assets/Icons/fill/sign-stop-lights-fill.svg";
import { ReactComponent as SignTurnLeftFill } from "../../assets/Icons/fill/sign-turn-left-fill.svg";
import { ReactComponent as SignTurnRightFill } from "../../assets/Icons/fill/sign-turn-right-fill.svg";
import { ReactComponent as SignTurnSlightLeftFill } from "../../assets/Icons/fill/sign-turn-slight-left-fill.svg";
import { ReactComponent as SignTurnSlightRightFill } from "../../assets/Icons/fill/sign-turn-slight-right-fill.svg";
import { ReactComponent as SignYieldFill } from "../../assets/Icons/fill/sign-yield-fill.svg";
import { ReactComponent as Signpost2Fill } from "../../assets/Icons/fill/signpost-2-fill.svg";
import { ReactComponent as SignpostFill } from "../../assets/Icons/fill/signpost-fill.svg";
import { ReactComponent as SignpostSplitFill } from "../../assets/Icons/fill/signpost-split-fill.svg";
import { ReactComponent as SimFill } from "../../assets/Icons/fill/sim-fill.svg";
import { ReactComponent as SkipBackwardBtnFill } from "../../assets/Icons/fill/skip-backward-btn-fill.svg";
import { ReactComponent as SkipBackwardCircleFill } from "../../assets/Icons/fill/skip-backward-circle-fill.svg";
import { ReactComponent as SkipBackwardFill } from "../../assets/Icons/fill/skip-backward-fill.svg";
import { ReactComponent as SkipEndBtnFill } from "../../assets/Icons/fill/skip-end-btn-fill.svg";
import { ReactComponent as SkipEndCircleFill } from "../../assets/Icons/fill/skip-end-circle-fill.svg";
import { ReactComponent as SkipEndFill } from "../../assets/Icons/fill/skip-end-fill.svg";
import { ReactComponent as SkipForwardBtnFill } from "../../assets/Icons/fill/skip-forward-btn-fill.svg";
import { ReactComponent as SkipForwardCircleFill } from "../../assets/Icons/fill/skip-forward-circle-fill.svg";
import { ReactComponent as SkipForwardFill } from "../../assets/Icons/fill/skip-forward-fill.svg";
import { ReactComponent as SkipStartBtnFill } from "../../assets/Icons/fill/skip-start-btn-fill.svg";
import { ReactComponent as SkipStartCircleFill } from "../../assets/Icons/fill/skip-start-circle-fill.svg";
import { ReactComponent as SkipStartFill } from "../../assets/Icons/fill/skip-start-fill.svg";
import { ReactComponent as SlashCircleFill } from "../../assets/Icons/fill/slash-circle-fill.svg";
import { ReactComponent as SlashSquareFill } from "../../assets/Icons/fill/slash-square-fill.svg";
import { ReactComponent as SpeakerFill } from "../../assets/Icons/fill/speaker-fill.svg";
import { ReactComponent as SquareFill } from "../../assets/Icons/fill/square-fill.svg";
import { ReactComponent as StarFill } from "../../assets/Icons/fill/star-fill.svg";
import { ReactComponent as StickiesFill } from "../../assets/Icons/fill/stickies-fill.svg";
import { ReactComponent as StickyFill } from "../../assets/Icons/fill/sticky-fill.svg";
import { ReactComponent as StopBtnFill } from "../../assets/Icons/fill/stop-btn-fill.svg";
import { ReactComponent as StopCircleFill } from "../../assets/Icons/fill/stop-circle-fill.svg";
import { ReactComponent as StopFill } from "../../assets/Icons/fill/stop-fill.svg";
import { ReactComponent as StoplightsFill } from "../../assets/Icons/fill/stoplights-fill.svg";
import { ReactComponent as StopwatchFill } from "../../assets/Icons/fill/stopwatch-fill.svg";
import { ReactComponent as SuitClubFill } from "../../assets/Icons/fill/suit-club-fill.svg";
import { ReactComponent as SuitDiamondFill } from "../../assets/Icons/fill/suit-diamond-fill.svg";
import { ReactComponent as SuitHeartFill } from "../../assets/Icons/fill/suit-heart-fill.svg";
import { ReactComponent as SuitSpadeFill } from "../../assets/Icons/fill/suit-spade-fill.svg";
import { ReactComponent as SunFill } from "../../assets/Icons/fill/sun-fill.svg";
import { ReactComponent as SunriseFill } from "../../assets/Icons/fill/sunrise-fill.svg";
import { ReactComponent as SunsetFill } from "../../assets/Icons/fill/sunset-fill.svg";
import { ReactComponent as TabletFill } from "../../assets/Icons/fill/tablet-fill.svg";
import { ReactComponent as TabletLandscapeFill } from "../../assets/Icons/fill/tablet-landscape-fill.svg";
import { ReactComponent as TagFill } from "../../assets/Icons/fill/tag-fill.svg";
import { ReactComponent as TagsFill } from "../../assets/Icons/fill/tags-fill.svg";
import { ReactComponent as TaxiFrontFill } from "../../assets/Icons/fill/taxi-front-fill.svg";
import { ReactComponent as TelephoneFill } from "../../assets/Icons/fill/telephone-fill.svg";
import { ReactComponent as TelephoneForwardFill } from "../../assets/Icons/fill/telephone-forward-fill.svg";
import { ReactComponent as TelephoneInboundFill } from "../../assets/Icons/fill/telephone-inbound-fill.svg";
import { ReactComponent as TelephoneMinusFill } from "../../assets/Icons/fill/telephone-minus-fill.svg";
import { ReactComponent as TelephoneOutboundFill } from "../../assets/Icons/fill/telephone-outbound-fill.svg";
import { ReactComponent as TelephonePlusFill } from "../../assets/Icons/fill/telephone-plus-fill.svg";
import { ReactComponent as TelephoneXFill } from "../../assets/Icons/fill/telephone-x-fill.svg";
import { ReactComponent as TerminalFill } from "../../assets/Icons/fill/terminal-fill.svg";
import { ReactComponent as ThunderboltFill } from "../../assets/Icons/fill/thunderbolt-fill.svg";
import { ReactComponent as TicketDetailedFill } from "../../assets/Icons/fill/ticket-detailed-fill.svg";
import { ReactComponent as TicketFill } from "../../assets/Icons/fill/ticket-fill.svg";
import { ReactComponent as TicketPerforatedFill } from "../../assets/Icons/fill/ticket-perforated-fill.svg";
import { ReactComponent as TrainFreightFrontFill } from "../../assets/Icons/fill/train-freight-front-fill.svg";
import { ReactComponent as TrainFrontFill } from "../../assets/Icons/fill/train-front-fill.svg";
import { ReactComponent as TrainLightrailFrontFill } from "../../assets/Icons/fill/train-lightrail-front-fill.svg";
import { ReactComponent as TrashFill } from "../../assets/Icons/fill/trash-fill.svg";
import { ReactComponent as Trash2Fill } from "../../assets/Icons/fill/trash2-fill.svg";
import { ReactComponent as Trash3Fill } from "../../assets/Icons/fill/trash3-fill.svg";
import { ReactComponent as TreeFill } from "../../assets/Icons/fill/tree-fill.svg";
import { ReactComponent as TriangleFill } from "../../assets/Icons/fill/triangle-fill.svg";
import { ReactComponent as TrophyFill } from "../../assets/Icons/fill/trophy-fill.svg";
import { ReactComponent as TruckFrontFill } from "../../assets/Icons/fill/truck-front-fill.svg";
import { ReactComponent as TvFill } from "../../assets/Icons/fill/tv-fill.svg";
import { ReactComponent as UmbrellaFill } from "../../assets/Icons/fill/umbrella-fill.svg";
import { ReactComponent as UnlockFill } from "../../assets/Icons/fill/unlock-fill.svg";
import { ReactComponent as UsbCFill } from "../../assets/Icons/fill/usb-c-fill.svg";
import { ReactComponent as UsbDriveFill } from "../../assets/Icons/fill/usb-drive-fill.svg";
import { ReactComponent as UsbFill } from "../../assets/Icons/fill/usb-fill.svg";
import { ReactComponent as UsbMicroFill } from "../../assets/Icons/fill/usb-micro-fill.svg";
import { ReactComponent as UsbMiniFill } from "../../assets/Icons/fill/usb-mini-fill.svg";
import { ReactComponent as UsbPlugFill } from "../../assets/Icons/fill/usb-plug-fill.svg";
import { ReactComponent as VinylFill } from "../../assets/Icons/fill/vinyl-fill.svg";
import { ReactComponent as VolumeDownFill } from "../../assets/Icons/fill/volume-down-fill.svg";
import { ReactComponent as VolumeMuteFill } from "../../assets/Icons/fill/volume-mute-fill.svg";
import { ReactComponent as VolumeOffFill } from "../../assets/Icons/fill/volume-off-fill.svg";
import { ReactComponent as VolumeUpFill } from "../../assets/Icons/fill/volume-up-fill.svg";
import { ReactComponent as WalletFill } from "../../assets/Icons/fill/wallet-fill.svg";
import { ReactComponent as WebcamFill } from "../../assets/Icons/fill/webcam-fill.svg";
import { ReactComponent as WrenchAdjustableCircleFill } from "../../assets/Icons/fill/wrench-adjustable-circle-fill.svg";
import { ReactComponent as XCircleFill } from "../../assets/Icons/fill/x-circle-fill.svg";
import { ReactComponent as XDiamondFill } from "../../assets/Icons/fill/x-diamond-fill.svg";
import { ReactComponent as XOctagonFill } from "../../assets/Icons/fill/x-octagon-fill.svg";
import { ReactComponent as XSquareFill } from "../../assets/Icons/fill/x-square-fill.svg";

export interface FillIconProps {
  name: FillIConType;
  width?: number | string;
  height?: number | string;
  theme?: Theme;
  className?: string;
}

export const FillIcon: React.FC<FillIconProps> = ({
  name,
  width,
  height,
  theme,
  className,
}) => {
  const classes = classNames("li", className, {
    [`icon-${theme}`]: theme,
  });
  switch (name) {
    case "Circle0Fill":
      return <Circle0Fill width={width} height={height} className={classes} />;
    case "Square0Fill":
      return <Square0Fill width={width} height={height} className={classes} />;
    case "Circle1Fill":
      return <Circle1Fill width={width} height={height} className={classes} />;
    case "Square1Fill":
      return <Square1Fill width={width} height={height} className={classes} />;
    case "Circle2Fill":
      return <Circle2Fill width={width} height={height} className={classes} />;
    case "Square2Fill":
      return <Square2Fill width={width} height={height} className={classes} />;
    case "Circle3Fill":
      return <Circle3Fill width={width} height={height} className={classes} />;
    case "Square3Fill":
      return <Square3Fill width={width} height={height} className={classes} />;
    case "Circle4Fill":
      return <Circle4Fill width={width} height={height} className={classes} />;
    case "Square4Fill":
      return <Square4Fill width={width} height={height} className={classes} />;
    case "Circle5Fill":
      return <Circle5Fill width={width} height={height} className={classes} />;
    case "Square5Fill":
      return <Square5Fill width={width} height={height} className={classes} />;
    case "Circle6Fill":
      return <Circle6Fill width={width} height={height} className={classes} />;
    case "Square6Fill":
      return <Square6Fill width={width} height={height} className={classes} />;
    case "Circle7Fill":
      return <Circle7Fill width={width} height={height} className={classes} />;
    case "Square7Fill":
      return <Square7Fill width={width} height={height} className={classes} />;
    case "Circle8Fill":
      return <Circle8Fill width={width} height={height} className={classes} />;
    case "Square8Fill":
      return <Square8Fill width={width} height={height} className={classes} />;
    case "Circle9Fill":
      return <Circle9Fill width={width} height={height} className={classes} />;
    case "Square9Fill":
      return <Square9Fill width={width} height={height} className={classes} />;
    case "AirplaneEnginesFill":
      return (
        <AirplaneEnginesFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "AirplaneFill":
      return <AirplaneFill width={width} height={height} className={classes} />;
    case "AlarmFill":
      return <AlarmFill width={width} height={height} className={classes} />;
    case "ArchiveFill":
      return <ArchiveFill width={width} height={height} className={classes} />;
    case "ArrowDownCircleFill":
      return (
        <ArrowDownCircleFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ArrowDownLeftCircleFill":
      return (
        <ArrowDownLeftCircleFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ArrowDownLeftSquareFill":
      return (
        <ArrowDownLeftSquareFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ArrowDownRightCircleFill":
      return (
        <ArrowDownRightCircleFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ArrowDownRightSquareFill":
      return (
        <ArrowDownRightSquareFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ArrowDownSquareFill":
      return (
        <ArrowDownSquareFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ArrowLeftCircleFill":
      return (
        <ArrowLeftCircleFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ArrowLeftSquareFill":
      return (
        <ArrowLeftSquareFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ArrowRightCircleFill":
      return (
        <ArrowRightCircleFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ArrowRightSquareFill":
      return (
        <ArrowRightSquareFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ArrowThroughHeartFill":
      return (
        <ArrowThroughHeartFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ArrowUpCircleFill":
      return (
        <ArrowUpCircleFill width={width} height={height} className={classes} />
      );
    case "ArrowUpLeftCircleFill":
      return (
        <ArrowUpLeftCircleFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ArrowUpLeftSquareFill":
      return (
        <ArrowUpLeftSquareFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ArrowUpRightCircleFill":
      return (
        <ArrowUpRightCircleFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ArrowUpRightSquareFill":
      return (
        <ArrowUpRightSquareFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ArrowUpSquareFill":
      return (
        <ArrowUpSquareFill width={width} height={height} className={classes} />
      );
    case "AspectRatioFill":
      return (
        <AspectRatioFill width={width} height={height} className={classes} />
      );
    case "AwardFill":
      return <AwardFill width={width} height={height} className={classes} />;
    case "BackspaceFill":
      return (
        <BackspaceFill width={width} height={height} className={classes} />
      );
    case "BackspaceReverseFill":
      return (
        <BackspaceReverseFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "Badge3dFill":
      return <Badge3dFill width={width} height={height} className={classes} />;
    case "Badge4kFill":
      return <Badge4kFill width={width} height={height} className={classes} />;
    case "Badge8kFill":
      return <Badge8kFill width={width} height={height} className={classes} />;
    case "BadgeAdFill":
      return <BadgeAdFill width={width} height={height} className={classes} />;
    case "BadgeArFill":
      return <BadgeArFill width={width} height={height} className={classes} />;
    case "BadgeCcFill":
      return <BadgeCcFill width={width} height={height} className={classes} />;
    case "BadgeHdFill":
      return <BadgeHdFill width={width} height={height} className={classes} />;
    case "BadgeSdFill":
      return <BadgeSdFill width={width} height={height} className={classes} />;
    case "BadgeTmFill":
      return <BadgeTmFill width={width} height={height} className={classes} />;
    case "BadgeVoFill":
      return <BadgeVoFill width={width} height={height} className={classes} />;
    case "BadgeVrFill":
      return <BadgeVrFill width={width} height={height} className={classes} />;
    case "BadgeWcFill":
      return <BadgeWcFill width={width} height={height} className={classes} />;
    case "BagCheckFill":
      return <BagCheckFill width={width} height={height} className={classes} />;
    case "BagDashFill":
      return <BagDashFill width={width} height={height} className={classes} />;
    case "BagFill":
      return <BagFill width={width} height={height} className={classes} />;
    case "BagHeartFill":
      return <BagHeartFill width={width} height={height} className={classes} />;
    case "BagPlusFill":
      return <BagPlusFill width={width} height={height} className={classes} />;
    case "BagXFill":
      return <BagXFill width={width} height={height} className={classes} />;
    case "BalloonFill":
      return <BalloonFill width={width} height={height} className={classes} />;
    case "BalloonHeartFill":
      return (
        <BalloonHeartFill width={width} height={height} className={classes} />
      );
    case "BandaidFill":
      return <BandaidFill width={width} height={height} className={classes} />;
    case "BarChartFill":
      return <BarChartFill width={width} height={height} className={classes} />;
    case "BarChartLineFill":
      return (
        <BarChartLineFill width={width} height={height} className={classes} />
      );
    case "BasketFill":
      return <BasketFill width={width} height={height} className={classes} />;
    case "Basket2Fill":
      return <Basket2Fill width={width} height={height} className={classes} />;
    case "Basket3Fill":
      return <Basket3Fill width={width} height={height} className={classes} />;
    case "BellFill":
      return <BellFill width={width} height={height} className={classes} />;
    case "BellSlashFill":
      return (
        <BellSlashFill width={width} height={height} className={classes} />
      );
    case "BinocularsFill":
      return (
        <BinocularsFill width={width} height={height} className={classes} />
      );
    case "BookFill":
      return <BookFill width={width} height={height} className={classes} />;
    case "BookmarkCheckFill":
      return (
        <BookmarkCheckFill width={width} height={height} className={classes} />
      );
    case "BookmarkDashFill":
      return (
        <BookmarkDashFill width={width} height={height} className={classes} />
      );
    case "BookmarkFill":
      return <BookmarkFill width={width} height={height} className={classes} />;
    case "BookmarkHeartFill":
      return (
        <BookmarkHeartFill width={width} height={height} className={classes} />
      );
    case "BookmarkPlusFill":
      return (
        <BookmarkPlusFill width={width} height={height} className={classes} />
      );
    case "BookmarkStarFill":
      return (
        <BookmarkStarFill width={width} height={height} className={classes} />
      );
    case "BookmarkXFill":
      return (
        <BookmarkXFill width={width} height={height} className={classes} />
      );
    case "BookmarksFill":
      return (
        <BookmarksFill width={width} height={height} className={classes} />
      );
    case "BoomboxFill":
      return <BoomboxFill width={width} height={height} className={classes} />;
    case "BootstrapFill":
      return (
        <BootstrapFill width={width} height={height} className={classes} />
      );
    case "BoxFill":
      return <BoxFill width={width} height={height} className={classes} />;
    case "BoxSeamFill":
      return <BoxSeamFill width={width} height={height} className={classes} />;
    case "Box2Fill":
      return <Box2Fill width={width} height={height} className={classes} />;
    case "Box2HeartFill":
      return (
        <Box2HeartFill width={width} height={height} className={classes} />
      );
    case "BriefcaseFill":
      return (
        <BriefcaseFill width={width} height={height} className={classes} />
      );
    case "BrightnessAltHighFill":
      return (
        <BrightnessAltHighFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "BrightnessAltLowFill":
      return (
        <BrightnessAltLowFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "BrightnessHighFill":
      return (
        <BrightnessHighFill width={width} height={height} className={classes} />
      );
    case "BrightnessLowFill":
      return (
        <BrightnessLowFill width={width} height={height} className={classes} />
      );
    case "BrushFill":
      return <BrushFill width={width} height={height} className={classes} />;
    case "BucketFill":
      return <BucketFill width={width} height={height} className={classes} />;
    case "BugFill":
      return <BugFill width={width} height={height} className={classes} />;
    case "BuildingFillAdd":
      return (
        <BuildingFillAdd width={width} height={height} className={classes} />
      );
    case "BuildingFillCheck":
      return (
        <BuildingFillCheck width={width} height={height} className={classes} />
      );
    case "BuildingFillDash":
      return (
        <BuildingFillDash width={width} height={height} className={classes} />
      );
    case "BuildingFillDown":
      return (
        <BuildingFillDown width={width} height={height} className={classes} />
      );
    case "BuildingFillExclamation":
      return (
        <BuildingFillExclamation
          width={width}
          height={height}
          className={classes}
        />
      );
    case "BuildingFillGear":
      return (
        <BuildingFillGear width={width} height={height} className={classes} />
      );
    case "BuildingFillLock":
      return (
        <BuildingFillLock width={width} height={height} className={classes} />
      );
    case "BuildingFillSlash":
      return (
        <BuildingFillSlash width={width} height={height} className={classes} />
      );
    case "BuildingFillUp":
      return (
        <BuildingFillUp width={width} height={height} className={classes} />
      );
    case "BuildingFillX":
      return (
        <BuildingFillX width={width} height={height} className={classes} />
      );
    case "BuildingFill":
      return <BuildingFill width={width} height={height} className={classes} />;
    case "BuildingsFill":
      return (
        <BuildingsFill width={width} height={height} className={classes} />
      );
    case "BusFrontFill":
      return <BusFrontFill width={width} height={height} className={classes} />;
    case "CCircleFill":
      return <CCircleFill width={width} height={height} className={classes} />;
    case "CSquareFill":
      return <CSquareFill width={width} height={height} className={classes} />;
    case "CalculatorFill":
      return (
        <CalculatorFill width={width} height={height} className={classes} />
      );
    case "CalendarCheckFill":
      return (
        <CalendarCheckFill width={width} height={height} className={classes} />
      );
    case "CalendarDateFill":
      return (
        <CalendarDateFill width={width} height={height} className={classes} />
      );
    case "CalendarDayFill":
      return (
        <CalendarDayFill width={width} height={height} className={classes} />
      );
    case "CalendarEventFill":
      return (
        <CalendarEventFill width={width} height={height} className={classes} />
      );
    case "CalendarFill":
      return <CalendarFill width={width} height={height} className={classes} />;
    case "CalendarHeartFill":
      return (
        <CalendarHeartFill width={width} height={height} className={classes} />
      );
    case "CalendarMinusFill":
      return (
        <CalendarMinusFill width={width} height={height} className={classes} />
      );
    case "CalendarMonthFill":
      return (
        <CalendarMonthFill width={width} height={height} className={classes} />
      );
    case "CalendarPlusFill":
      return (
        <CalendarPlusFill width={width} height={height} className={classes} />
      );
    case "CalendarRangeFill":
      return (
        <CalendarRangeFill width={width} height={height} className={classes} />
      );
    case "CalendarWeekFill":
      return (
        <CalendarWeekFill width={width} height={height} className={classes} />
      );
    case "CalendarXFill":
      return (
        <CalendarXFill width={width} height={height} className={classes} />
      );
    case "Calendar2CheckFill":
      return (
        <Calendar2CheckFill width={width} height={height} className={classes} />
      );
    case "Calendar2DateFill":
      return (
        <Calendar2DateFill width={width} height={height} className={classes} />
      );
    case "Calendar2DayFill":
      return (
        <Calendar2DayFill width={width} height={height} className={classes} />
      );
    case "Calendar2EventFill":
      return (
        <Calendar2EventFill width={width} height={height} className={classes} />
      );
    case "Calendar2Fill":
      return (
        <Calendar2Fill width={width} height={height} className={classes} />
      );
    case "Calendar2HeartFill":
      return (
        <Calendar2HeartFill width={width} height={height} className={classes} />
      );
    case "Calendar2MinusFill":
      return (
        <Calendar2MinusFill width={width} height={height} className={classes} />
      );
    case "Calendar2MonthFill":
      return (
        <Calendar2MonthFill width={width} height={height} className={classes} />
      );
    case "Calendar2PlusFill":
      return (
        <Calendar2PlusFill width={width} height={height} className={classes} />
      );
    case "Calendar2RangeFill":
      return (
        <Calendar2RangeFill width={width} height={height} className={classes} />
      );
    case "Calendar2WeekFill":
      return (
        <Calendar2WeekFill width={width} height={height} className={classes} />
      );
    case "Calendar2XFill":
      return (
        <Calendar2XFill width={width} height={height} className={classes} />
      );
    case "Calendar3EventFill":
      return (
        <Calendar3EventFill width={width} height={height} className={classes} />
      );
    case "Calendar3Fill":
      return (
        <Calendar3Fill width={width} height={height} className={classes} />
      );
    case "Calendar3RangeFill":
      return (
        <Calendar3RangeFill width={width} height={height} className={classes} />
      );
    case "Calendar3WeekFill":
      return (
        <Calendar3WeekFill width={width} height={height} className={classes} />
      );
    case "CameraFill":
      return <CameraFill width={width} height={height} className={classes} />;
    case "CameraReelsFill":
      return (
        <CameraReelsFill width={width} height={height} className={classes} />
      );
    case "CameraVideoFill":
      return (
        <CameraVideoFill width={width} height={height} className={classes} />
      );
    case "CameraVideoOffFill":
      return (
        <CameraVideoOffFill width={width} height={height} className={classes} />
      );
    case "CapslockFill":
      return <CapslockFill width={width} height={height} className={classes} />;
    case "CarFrontFill":
      return <CarFrontFill width={width} height={height} className={classes} />;
    case "CaretDownFill":
      return (
        <CaretDownFill width={width} height={height} className={classes} />
      );
    case "CaretDownSquareFill":
      return (
        <CaretDownSquareFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "CaretLeftFill":
      return (
        <CaretLeftFill width={width} height={height} className={classes} />
      );
    case "CaretLeftSquareFill":
      return (
        <CaretLeftSquareFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "CaretRightFill":
      return (
        <CaretRightFill width={width} height={height} className={classes} />
      );
    case "CaretRightSquareFill":
      return (
        <CaretRightSquareFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "CaretUpFill":
      return <CaretUpFill width={width} height={height} className={classes} />;
    case "CaretUpSquareFill":
      return (
        <CaretUpSquareFill width={width} height={height} className={classes} />
      );
    case "CartCheckFill":
      return (
        <CartCheckFill width={width} height={height} className={classes} />
      );
    case "CartDashFill":
      return <CartDashFill width={width} height={height} className={classes} />;
    case "CartFill":
      return <CartFill width={width} height={height} className={classes} />;
    case "CartPlusFill":
      return <CartPlusFill width={width} height={height} className={classes} />;
    case "CartXFill":
      return <CartXFill width={width} height={height} className={classes} />;
    case "CassetteFill":
      return <CassetteFill width={width} height={height} className={classes} />;
    case "CcCircleFill":
      return <CcCircleFill width={width} height={height} className={classes} />;
    case "CcSquareFill":
      return <CcSquareFill width={width} height={height} className={classes} />;
    case "ChatDotsFill":
      return <ChatDotsFill width={width} height={height} className={classes} />;
    case "ChatFill":
      return <ChatFill width={width} height={height} className={classes} />;
    case "ChatHeartFill":
      return (
        <ChatHeartFill width={width} height={height} className={classes} />
      );
    case "ChatLeftDotsFill":
      return (
        <ChatLeftDotsFill width={width} height={height} className={classes} />
      );
    case "ChatLeftFill":
      return <ChatLeftFill width={width} height={height} className={classes} />;
    case "ChatLeftHeartFill":
      return (
        <ChatLeftHeartFill width={width} height={height} className={classes} />
      );
    case "ChatLeftQuoteFill":
      return (
        <ChatLeftQuoteFill width={width} height={height} className={classes} />
      );
    case "ChatLeftTextFill":
      return (
        <ChatLeftTextFill width={width} height={height} className={classes} />
      );
    case "ChatQuoteFill":
      return (
        <ChatQuoteFill width={width} height={height} className={classes} />
      );
    case "ChatRightDotsFill":
      return (
        <ChatRightDotsFill width={width} height={height} className={classes} />
      );
    case "ChatRightFill":
      return (
        <ChatRightFill width={width} height={height} className={classes} />
      );
    case "ChatRightHeartFill":
      return (
        <ChatRightHeartFill width={width} height={height} className={classes} />
      );
    case "ChatRightQuoteFill":
      return (
        <ChatRightQuoteFill width={width} height={height} className={classes} />
      );
    case "ChatRightTextFill":
      return (
        <ChatRightTextFill width={width} height={height} className={classes} />
      );
    case "ChatSquareDotsFill":
      return (
        <ChatSquareDotsFill width={width} height={height} className={classes} />
      );
    case "ChatSquareFill":
      return (
        <ChatSquareFill width={width} height={height} className={classes} />
      );
    case "ChatSquareHeartFill":
      return (
        <ChatSquareHeartFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ChatSquareQuoteFill":
      return (
        <ChatSquareQuoteFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ChatSquareTextFill":
      return (
        <ChatSquareTextFill width={width} height={height} className={classes} />
      );
    case "ChatTextFill":
      return <ChatTextFill width={width} height={height} className={classes} />;
    case "CheckCircleFill":
      return (
        <CheckCircleFill width={width} height={height} className={classes} />
      );
    case "CheckSquareFill":
      return (
        <CheckSquareFill width={width} height={height} className={classes} />
      );
    case "CircleFill":
      return <CircleFill width={width} height={height} className={classes} />;
    case "ClipboardCheckFill":
      return (
        <ClipboardCheckFill width={width} height={height} className={classes} />
      );
    case "ClipboardDataFill":
      return (
        <ClipboardDataFill width={width} height={height} className={classes} />
      );
    case "ClipboardFill":
      return (
        <ClipboardFill width={width} height={height} className={classes} />
      );
    case "ClipboardHeartFill":
      return (
        <ClipboardHeartFill width={width} height={height} className={classes} />
      );
    case "ClipboardMinusFill":
      return (
        <ClipboardMinusFill width={width} height={height} className={classes} />
      );
    case "ClipboardPlusFill":
      return (
        <ClipboardPlusFill width={width} height={height} className={classes} />
      );
    case "ClipboardXFill":
      return (
        <ClipboardXFill width={width} height={height} className={classes} />
      );
    case "Clipboard2CheckFill":
      return (
        <Clipboard2CheckFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "Clipboard2DataFill":
      return (
        <Clipboard2DataFill width={width} height={height} className={classes} />
      );
    case "Clipboard2Fill":
      return (
        <Clipboard2Fill width={width} height={height} className={classes} />
      );
    case "Clipboard2HeartFill":
      return (
        <Clipboard2HeartFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "Clipboard2MinusFill":
      return (
        <Clipboard2MinusFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "Clipboard2PlusFill":
      return (
        <Clipboard2PlusFill width={width} height={height} className={classes} />
      );
    case "Clipboard2PulseFill":
      return (
        <Clipboard2PulseFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "Clipboard2XFill":
      return (
        <Clipboard2XFill width={width} height={height} className={classes} />
      );
    case "ClockFill":
      return <ClockFill width={width} height={height} className={classes} />;
    case "CloudArrowDownFill":
      return (
        <CloudArrowDownFill width={width} height={height} className={classes} />
      );
    case "CloudArrowUpFill":
      return (
        <CloudArrowUpFill width={width} height={height} className={classes} />
      );
    case "CloudCheckFill":
      return (
        <CloudCheckFill width={width} height={height} className={classes} />
      );
    case "CloudDownloadFill":
      return (
        <CloudDownloadFill width={width} height={height} className={classes} />
      );
    case "CloudDrizzleFill":
      return (
        <CloudDrizzleFill width={width} height={height} className={classes} />
      );
    case "CloudFill":
      return <CloudFill width={width} height={height} className={classes} />;
    case "CloudFogFill":
      return <CloudFogFill width={width} height={height} className={classes} />;
    case "CloudFog2Fill":
      return (
        <CloudFog2Fill width={width} height={height} className={classes} />
      );
    case "CloudHailFill":
      return (
        <CloudHailFill width={width} height={height} className={classes} />
      );
    case "CloudHazeFill":
      return (
        <CloudHazeFill width={width} height={height} className={classes} />
      );
    case "CloudHaze2Fill":
      return (
        <CloudHaze2Fill width={width} height={height} className={classes} />
      );
    case "CloudLightningFill":
      return (
        <CloudLightningFill width={width} height={height} className={classes} />
      );
    case "CloudLightningRainFill":
      return (
        <CloudLightningRainFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "CloudMinusFill":
      return (
        <CloudMinusFill width={width} height={height} className={classes} />
      );
    case "CloudMoonFill":
      return (
        <CloudMoonFill width={width} height={height} className={classes} />
      );
    case "CloudPlusFill":
      return (
        <CloudPlusFill width={width} height={height} className={classes} />
      );
    case "CloudRainFill":
      return (
        <CloudRainFill width={width} height={height} className={classes} />
      );
    case "CloudRainHeavyFill":
      return (
        <CloudRainHeavyFill width={width} height={height} className={classes} />
      );
    case "CloudSlashFill":
      return (
        <CloudSlashFill width={width} height={height} className={classes} />
      );
    case "CloudSleetFill":
      return (
        <CloudSleetFill width={width} height={height} className={classes} />
      );
    case "CloudSnowFill":
      return (
        <CloudSnowFill width={width} height={height} className={classes} />
      );
    case "CloudSunFill":
      return <CloudSunFill width={width} height={height} className={classes} />;
    case "CloudUploadFill":
      return (
        <CloudUploadFill width={width} height={height} className={classes} />
      );
    case "CloudsFill":
      return <CloudsFill width={width} height={height} className={classes} />;
    case "CloudyFill":
      return <CloudyFill width={width} height={height} className={classes} />;
    case "CollectionFill":
      return (
        <CollectionFill width={width} height={height} className={classes} />
      );
    case "CollectionPlayFill":
      return (
        <CollectionPlayFill width={width} height={height} className={classes} />
      );
    case "CompassFill":
      return <CompassFill width={width} height={height} className={classes} />;
    case "CpuFill":
      return <CpuFill width={width} height={height} className={classes} />;
    case "CreditCard2BackFill":
      return (
        <CreditCard2BackFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "CreditCard2FrontFill":
      return (
        <CreditCard2FrontFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "CreditCardFill":
      return (
        <CreditCardFill width={width} height={height} className={classes} />
      );
    case "CupFill":
      return <CupFill width={width} height={height} className={classes} />;
    case "CupHotFill":
      return <CupHotFill width={width} height={height} className={classes} />;
    case "CursorFill":
      return <CursorFill width={width} height={height} className={classes} />;
    case "DashCircleFill":
      return (
        <DashCircleFill width={width} height={height} className={classes} />
      );
    case "DashSquareFill":
      return (
        <DashSquareFill width={width} height={height} className={classes} />
      );
    case "DatabaseFillAdd":
      return (
        <DatabaseFillAdd width={width} height={height} className={classes} />
      );
    case "DatabaseFillCheck":
      return (
        <DatabaseFillCheck width={width} height={height} className={classes} />
      );
    case "DatabaseFillDash":
      return (
        <DatabaseFillDash width={width} height={height} className={classes} />
      );
    case "DatabaseFillDown":
      return (
        <DatabaseFillDown width={width} height={height} className={classes} />
      );
    case "DatabaseFillExclamation":
      return (
        <DatabaseFillExclamation
          width={width}
          height={height}
          className={classes}
        />
      );
    case "DatabaseFillGear":
      return (
        <DatabaseFillGear width={width} height={height} className={classes} />
      );
    case "DatabaseFillLock":
      return (
        <DatabaseFillLock width={width} height={height} className={classes} />
      );
    case "DatabaseFillSlash":
      return (
        <DatabaseFillSlash width={width} height={height} className={classes} />
      );
    case "DatabaseFillUp":
      return (
        <DatabaseFillUp width={width} height={height} className={classes} />
      );
    case "DatabaseFillX":
      return (
        <DatabaseFillX width={width} height={height} className={classes} />
      );
    case "DatabaseFill":
      return <DatabaseFill width={width} height={height} className={classes} />;
    case "DeviceHddFill":
      return (
        <DeviceHddFill width={width} height={height} className={classes} />
      );
    case "DeviceSsdFill":
      return (
        <DeviceSsdFill width={width} height={height} className={classes} />
      );
    case "Diagram2Fill":
      return <Diagram2Fill width={width} height={height} className={classes} />;
    case "Diagram3Fill":
      return <Diagram3Fill width={width} height={height} className={classes} />;
    case "DiamondFill":
      return <DiamondFill width={width} height={height} className={classes} />;
    case "Dice1Fill":
      return <Dice1Fill width={width} height={height} className={classes} />;
    case "Dice2Fill":
      return <Dice2Fill width={width} height={height} className={classes} />;
    case "Dice3Fill":
      return <Dice3Fill width={width} height={height} className={classes} />;
    case "Dice4Fill":
      return <Dice4Fill width={width} height={height} className={classes} />;
    case "Dice5Fill":
      return <Dice5Fill width={width} height={height} className={classes} />;
    case "Dice6Fill":
      return <Dice6Fill width={width} height={height} className={classes} />;
    case "DiscFill":
      return <DiscFill width={width} height={height} className={classes} />;
    case "DisplayFill":
      return <DisplayFill width={width} height={height} className={classes} />;
    case "DisplayportFill":
      return (
        <DisplayportFill width={width} height={height} className={classes} />
      );
    case "DoorClosedFill":
      return (
        <DoorClosedFill width={width} height={height} className={classes} />
      );
    case "DoorOpenFill":
      return <DoorOpenFill width={width} height={height} className={classes} />;
    case "DpadFill":
      return <DpadFill width={width} height={height} className={classes} />;
    case "DropletFill":
      return <DropletFill width={width} height={height} className={classes} />;
    case "EarFill":
      return <EarFill width={width} height={height} className={classes} />;
    case "EaselFill":
      return <EaselFill width={width} height={height} className={classes} />;
    case "Easel2Fill":
      return <Easel2Fill width={width} height={height} className={classes} />;
    case "Easel3Fill":
      return <Easel3Fill width={width} height={height} className={classes} />;
    case "EggFill":
      return <EggFill width={width} height={height} className={classes} />;
    case "EjectFill":
      return <EjectFill width={width} height={height} className={classes} />;
    case "EmojiAngryFill":
      return (
        <EmojiAngryFill width={width} height={height} className={classes} />
      );
    case "EmojiDizzyFill":
      return (
        <EmojiDizzyFill width={width} height={height} className={classes} />
      );
    case "EmojiExpressionlessFill":
      return (
        <EmojiExpressionlessFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "EmojiFrownFill":
      return (
        <EmojiFrownFill width={width} height={height} className={classes} />
      );
    case "EmojiHeartEyesFill":
      return (
        <EmojiHeartEyesFill width={width} height={height} className={classes} />
      );
    case "EmojiKissFill":
      return (
        <EmojiKissFill width={width} height={height} className={classes} />
      );
    case "EmojiLaughingFill":
      return (
        <EmojiLaughingFill width={width} height={height} className={classes} />
      );
    case "EmojiNeutralFill":
      return (
        <EmojiNeutralFill width={width} height={height} className={classes} />
      );
    case "EmojiSmileFill":
      return (
        <EmojiSmileFill width={width} height={height} className={classes} />
      );
    case "EmojiSmileUpsideDownFill":
      return (
        <EmojiSmileUpsideDownFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "EmojiSunglassesFill":
      return (
        <EmojiSunglassesFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "EmojiWinkFill":
      return (
        <EmojiWinkFill width={width} height={height} className={classes} />
      );
    case "EnvelopeAtFill":
      return (
        <EnvelopeAtFill width={width} height={height} className={classes} />
      );
    case "EnvelopeCheckFill":
      return (
        <EnvelopeCheckFill width={width} height={height} className={classes} />
      );
    case "EnvelopeDashFill":
      return (
        <EnvelopeDashFill width={width} height={height} className={classes} />
      );
    case "EnvelopeExclamationFill":
      return (
        <EnvelopeExclamationFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "EnvelopeFill":
      return <EnvelopeFill width={width} height={height} className={classes} />;
    case "EnvelopeHeartFill":
      return (
        <EnvelopeHeartFill width={width} height={height} className={classes} />
      );
    case "EnvelopeOpenFill":
      return (
        <EnvelopeOpenFill width={width} height={height} className={classes} />
      );
    case "EnvelopeOpenHeartFill":
      return (
        <EnvelopeOpenHeartFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "EnvelopePaperFill":
      return (
        <EnvelopePaperFill width={width} height={height} className={classes} />
      );
    case "EnvelopePaperHeartFill":
      return (
        <EnvelopePaperHeartFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "EnvelopePlusFill":
      return (
        <EnvelopePlusFill width={width} height={height} className={classes} />
      );
    case "EnvelopeSlashFill":
      return (
        <EnvelopeSlashFill width={width} height={height} className={classes} />
      );
    case "EnvelopeXFill":
      return (
        <EnvelopeXFill width={width} height={height} className={classes} />
      );
    case "EraserFill":
      return <EraserFill width={width} height={height} className={classes} />;
    case "EvFrontFill":
      return <EvFrontFill width={width} height={height} className={classes} />;
    case "EvStationFill":
      return (
        <EvStationFill width={width} height={height} className={classes} />
      );
    case "ExclamationCircleFill":
      return (
        <ExclamationCircleFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ExclamationDiamondFill":
      return (
        <ExclamationDiamondFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ExclamationOctagonFill":
      return (
        <ExclamationOctagonFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ExclamationSquareFill":
      return (
        <ExclamationSquareFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ExclamationTriangleFill":
      return (
        <ExclamationTriangleFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ExplicitFill":
      return <ExplicitFill width={width} height={height} className={classes} />;
    case "EyeFill":
      return <EyeFill width={width} height={height} className={classes} />;
    case "EyeSlashFill":
      return <EyeSlashFill width={width} height={height} className={classes} />;
    case "FastForwardBtnFill":
      return (
        <FastForwardBtnFill width={width} height={height} className={classes} />
      );
    case "FastForwardCircleFill":
      return (
        <FastForwardCircleFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FastForwardFill":
      return (
        <FastForwardFill width={width} height={height} className={classes} />
      );
    case "FileArrowDownFill":
      return (
        <FileArrowDownFill width={width} height={height} className={classes} />
      );
    case "FileArrowUpFill":
      return (
        <FileArrowUpFill width={width} height={height} className={classes} />
      );
    case "FileBarGraphFill":
      return (
        <FileBarGraphFill width={width} height={height} className={classes} />
      );
    case "FileBinaryFill":
      return (
        <FileBinaryFill width={width} height={height} className={classes} />
      );
    case "FileBreakFill":
      return (
        <FileBreakFill width={width} height={height} className={classes} />
      );
    case "FileCheckFill":
      return (
        <FileCheckFill width={width} height={height} className={classes} />
      );
    case "FileCodeFill":
      return <FileCodeFill width={width} height={height} className={classes} />;
    case "FileDiffFill":
      return <FileDiffFill width={width} height={height} className={classes} />;
    case "FileEarmarkArrowDownFill":
      return (
        <FileEarmarkArrowDownFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkArrowUpFill":
      return (
        <FileEarmarkArrowUpFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkBarGraphFill":
      return (
        <FileEarmarkBarGraphFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkBinaryFill":
      return (
        <FileEarmarkBinaryFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkBreakFill":
      return (
        <FileEarmarkBreakFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkCheckFill":
      return (
        <FileEarmarkCheckFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkCodeFill":
      return (
        <FileEarmarkCodeFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkDiffFill":
      return (
        <FileEarmarkDiffFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkEaselFill":
      return (
        <FileEarmarkEaselFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkExcelFill":
      return (
        <FileEarmarkExcelFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkFill":
      return (
        <FileEarmarkFill width={width} height={height} className={classes} />
      );
    case "FileEarmarkFontFill":
      return (
        <FileEarmarkFontFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkImageFill":
      return (
        <FileEarmarkImageFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkLockFill":
      return (
        <FileEarmarkLockFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkLock2Fill":
      return (
        <FileEarmarkLock2Fill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkMedicalFill":
      return (
        <FileEarmarkMedicalFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkMinusFill":
      return (
        <FileEarmarkMinusFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkMusicFill":
      return (
        <FileEarmarkMusicFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkPdfFill":
      return (
        <FileEarmarkPdfFill width={width} height={height} className={classes} />
      );
    case "FileEarmarkPersonFill":
      return (
        <FileEarmarkPersonFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkPlayFill":
      return (
        <FileEarmarkPlayFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkPlusFill":
      return (
        <FileEarmarkPlusFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkPostFill":
      return (
        <FileEarmarkPostFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkPptFill":
      return (
        <FileEarmarkPptFill width={width} height={height} className={classes} />
      );
    case "FileEarmarkRichtextFill":
      return (
        <FileEarmarkRichtextFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkRuledFill":
      return (
        <FileEarmarkRuledFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkSlidesFill":
      return (
        <FileEarmarkSlidesFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkSpreadsheetFill":
      return (
        <FileEarmarkSpreadsheetFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkTextFill":
      return (
        <FileEarmarkTextFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkWordFill":
      return (
        <FileEarmarkWordFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkXFill":
      return (
        <FileEarmarkXFill width={width} height={height} className={classes} />
      );
    case "FileEarmarkZipFill":
      return (
        <FileEarmarkZipFill width={width} height={height} className={classes} />
      );
    case "FileEaselFill":
      return (
        <FileEaselFill width={width} height={height} className={classes} />
      );
    case "FileExcelFill":
      return (
        <FileExcelFill width={width} height={height} className={classes} />
      );
    case "FileFill":
      return <FileFill width={width} height={height} className={classes} />;
    case "FileFontFill":
      return <FileFontFill width={width} height={height} className={classes} />;
    case "FileImageFill":
      return (
        <FileImageFill width={width} height={height} className={classes} />
      );
    case "FileLockFill":
      return <FileLockFill width={width} height={height} className={classes} />;
    case "FileLock2Fill":
      return (
        <FileLock2Fill width={width} height={height} className={classes} />
      );
    case "FileMedicalFill":
      return (
        <FileMedicalFill width={width} height={height} className={classes} />
      );
    case "FileMinusFill":
      return (
        <FileMinusFill width={width} height={height} className={classes} />
      );
    case "FileMusicFill":
      return (
        <FileMusicFill width={width} height={height} className={classes} />
      );
    case "FilePdfFill":
      return <FilePdfFill width={width} height={height} className={classes} />;
    case "FilePersonFill":
      return (
        <FilePersonFill width={width} height={height} className={classes} />
      );
    case "FilePlayFill":
      return <FilePlayFill width={width} height={height} className={classes} />;
    case "FilePlusFill":
      return <FilePlusFill width={width} height={height} className={classes} />;
    case "FilePostFill":
      return <FilePostFill width={width} height={height} className={classes} />;
    case "FilePptFill":
      return <FilePptFill width={width} height={height} className={classes} />;
    case "FileRichtextFill":
      return (
        <FileRichtextFill width={width} height={height} className={classes} />
      );
    case "FileRuledFill":
      return (
        <FileRuledFill width={width} height={height} className={classes} />
      );
    case "FileSlidesFill":
      return (
        <FileSlidesFill width={width} height={height} className={classes} />
      );
    case "FileSpreadsheetFill":
      return (
        <FileSpreadsheetFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileTextFill":
      return <FileTextFill width={width} height={height} className={classes} />;
    case "FileWordFill":
      return <FileWordFill width={width} height={height} className={classes} />;
    case "FileXFill":
      return <FileXFill width={width} height={height} className={classes} />;
    case "FileZipFill":
      return <FileZipFill width={width} height={height} className={classes} />;
    case "FilterCircleFill":
      return (
        <FilterCircleFill width={width} height={height} className={classes} />
      );
    case "FilterSquareFill":
      return (
        <FilterSquareFill width={width} height={height} className={classes} />
      );
    case "FlagFill":
      return <FlagFill width={width} height={height} className={classes} />;
    case "FolderFill":
      return <FolderFill width={width} height={height} className={classes} />;
    case "FolderSymlinkFill":
      return (
        <FolderSymlinkFill width={width} height={height} className={classes} />
      );
    case "ForwardFill":
      return <ForwardFill width={width} height={height} className={classes} />;
    case "FuelPumpDieselFill":
      return (
        <FuelPumpDieselFill width={width} height={height} className={classes} />
      );
    case "FuelPumpFill":
      return <FuelPumpFill width={width} height={height} className={classes} />;
    case "FunnelFill":
      return <FunnelFill width={width} height={height} className={classes} />;
    case "GearFill":
      return <GearFill width={width} height={height} className={classes} />;
    case "GeoAltFill":
      return <GeoAltFill width={width} height={height} className={classes} />;
    case "GeoFill":
      return <GeoFill width={width} height={height} className={classes} />;
    case "GiftFill":
      return <GiftFill width={width} height={height} className={classes} />;
    case "Grid1x2Fill":
      return <Grid1x2Fill width={width} height={height} className={classes} />;
    case "Grid3x2GapFill":
      return (
        <Grid3x2GapFill width={width} height={height} className={classes} />
      );
    case "Grid3x3GapFill":
      return (
        <Grid3x3GapFill width={width} height={height} className={classes} />
      );
    case "GridFill":
      return <GridFill width={width} height={height} className={classes} />;
    case "HCircleFill":
      return <HCircleFill width={width} height={height} className={classes} />;
    case "HSquareFill":
      return <HSquareFill width={width} height={height} className={classes} />;
    case "HandIndexFill":
      return (
        <HandIndexFill width={width} height={height} className={classes} />
      );
    case "HandIndexThumbFill":
      return (
        <HandIndexThumbFill width={width} height={height} className={classes} />
      );
    case "HandThumbsDownFill":
      return (
        <HandThumbsDownFill width={width} height={height} className={classes} />
      );
    case "HandThumbsUpFill":
      return (
        <HandThumbsUpFill width={width} height={height} className={classes} />
      );
    case "HandbagFill":
      return <HandbagFill width={width} height={height} className={classes} />;
    case "HddFill":
      return <HddFill width={width} height={height} className={classes} />;
    case "HddNetworkFill":
      return (
        <HddNetworkFill width={width} height={height} className={classes} />
      );
    case "HddRackFill":
      return <HddRackFill width={width} height={height} className={classes} />;
    case "HddStackFill":
      return <HddStackFill width={width} height={height} className={classes} />;
    case "HdmiFill":
      return <HdmiFill width={width} height={height} className={classes} />;
    case "HeartFill":
      return <HeartFill width={width} height={height} className={classes} />;
    case "HeartPulseFill":
      return (
        <HeartPulseFill width={width} height={height} className={classes} />
      );
    case "HeartbreakFill":
      return (
        <HeartbreakFill width={width} height={height} className={classes} />
      );
    case "HeptagonFill":
      return <HeptagonFill width={width} height={height} className={classes} />;
    case "HexagonFill":
      return <HexagonFill width={width} height={height} className={classes} />;
    case "HospitalFill":
      return <HospitalFill width={width} height={height} className={classes} />;
    case "HouseAddFill":
      return <HouseAddFill width={width} height={height} className={classes} />;
    case "HouseCheckFill":
      return (
        <HouseCheckFill width={width} height={height} className={classes} />
      );
    case "HouseDashFill":
      return (
        <HouseDashFill width={width} height={height} className={classes} />
      );
    case "HouseDoorFill":
      return (
        <HouseDoorFill width={width} height={height} className={classes} />
      );
    case "HouseDownFill":
      return (
        <HouseDownFill width={width} height={height} className={classes} />
      );
    case "HouseExclamationFill":
      return (
        <HouseExclamationFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "HouseFill":
      return <HouseFill width={width} height={height} className={classes} />;
    case "HouseGearFill":
      return (
        <HouseGearFill width={width} height={height} className={classes} />
      );
    case "HouseHeartFill":
      return (
        <HouseHeartFill width={width} height={height} className={classes} />
      );
    case "HouseLockFill":
      return (
        <HouseLockFill width={width} height={height} className={classes} />
      );
    case "HouseSlashFill":
      return (
        <HouseSlashFill width={width} height={height} className={classes} />
      );
    case "HouseUpFill":
      return <HouseUpFill width={width} height={height} className={classes} />;
    case "HouseXFill":
      return <HouseXFill width={width} height={height} className={classes} />;
    case "HousesFill":
      return <HousesFill width={width} height={height} className={classes} />;
    case "ImageFill":
      return <ImageFill width={width} height={height} className={classes} />;
    case "InboxFill":
      return <InboxFill width={width} height={height} className={classes} />;
    case "InboxesFill":
      return <InboxesFill width={width} height={height} className={classes} />;
    case "InfoCircleFill":
      return (
        <InfoCircleFill width={width} height={height} className={classes} />
      );
    case "InfoSquareFill":
      return (
        <InfoSquareFill width={width} height={height} className={classes} />
      );
    case "JournalBookmarkFill":
      return (
        <JournalBookmarkFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "KanbanFill":
      return <KanbanFill width={width} height={height} className={classes} />;
    case "KeyFill":
      return <KeyFill width={width} height={height} className={classes} />;
    case "KeyboardFill":
      return <KeyboardFill width={width} height={height} className={classes} />;
    case "LampFill":
      return <LampFill width={width} height={height} className={classes} />;
    case "LaptopFill":
      return <LaptopFill width={width} height={height} className={classes} />;
    case "LayersFill":
      return <LayersFill width={width} height={height} className={classes} />;
    case "LightbulbFill":
      return (
        <LightbulbFill width={width} height={height} className={classes} />
      );
    case "LightbulbOffFill":
      return (
        <LightbulbOffFill width={width} height={height} className={classes} />
      );
    case "LightningChargeFill":
      return (
        <LightningChargeFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "LightningFill":
      return (
        <LightningFill width={width} height={height} className={classes} />
      );
    case "LockFill":
      return <LockFill width={width} height={height} className={classes} />;
    case "LungsFill":
      return <LungsFill width={width} height={height} className={classes} />;
    case "MagnetFill":
      return <MagnetFill width={width} height={height} className={classes} />;
    case "MapFill":
      return <MapFill width={width} height={height} className={classes} />;
    case "MarkdownFill":
      return <MarkdownFill width={width} height={height} className={classes} />;
    case "MegaphoneFill":
      return (
        <MegaphoneFill width={width} height={height} className={classes} />
      );
    case "MenuAppFill":
      return <MenuAppFill width={width} height={height} className={classes} />;
    case "MenuButtonFill":
      return (
        <MenuButtonFill width={width} height={height} className={classes} />
      );
    case "MenuButtonWideFill":
      return (
        <MenuButtonWideFill width={width} height={height} className={classes} />
      );
    case "MicFill":
      return <MicFill width={width} height={height} className={classes} />;
    case "MicMuteFill":
      return <MicMuteFill width={width} height={height} className={classes} />;
    case "ModemFill":
      return <ModemFill width={width} height={height} className={classes} />;
    case "MoonFill":
      return <MoonFill width={width} height={height} className={classes} />;
    case "MoonStarsFill":
      return (
        <MoonStarsFill width={width} height={height} className={classes} />
      );
    case "MortarboardFill":
      return (
        <MortarboardFill width={width} height={height} className={classes} />
      );
    case "MotherboardFill":
      return (
        <MotherboardFill width={width} height={height} className={classes} />
      );
    case "MouseFill":
      return <MouseFill width={width} height={height} className={classes} />;
    case "Mouse2Fill":
      return <Mouse2Fill width={width} height={height} className={classes} />;
    case "Mouse3Fill":
      return <Mouse3Fill width={width} height={height} className={classes} />;
    case "MusicPlayerFill":
      return (
        <MusicPlayerFill width={width} height={height} className={classes} />
      );
    case "NodeMinusFill":
      return (
        <NodeMinusFill width={width} height={height} className={classes} />
      );
    case "NodePlusFill":
      return <NodePlusFill width={width} height={height} className={classes} />;
    case "NutFill":
      return <NutFill width={width} height={height} className={classes} />;
    case "OctagonFill":
      return <OctagonFill width={width} height={height} className={classes} />;
    case "OpticalAudioFill":
      return (
        <OpticalAudioFill width={width} height={height} className={classes} />
      );
    case "PCircleFill":
      return <PCircleFill width={width} height={height} className={classes} />;
    case "PSquareFill":
      return <PSquareFill width={width} height={height} className={classes} />;
    case "PaletteFill":
      return <PaletteFill width={width} height={height} className={classes} />;
    case "PassFill":
      return <PassFill width={width} height={height} className={classes} />;
    case "PatchCheckFill":
      return (
        <PatchCheckFill width={width} height={height} className={classes} />
      );
    case "PatchExclamationFill":
      return (
        <PatchExclamationFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "PatchMinusFill":
      return (
        <PatchMinusFill width={width} height={height} className={classes} />
      );
    case "PatchPlusFill":
      return (
        <PatchPlusFill width={width} height={height} className={classes} />
      );
    case "PatchQuestionFill":
      return (
        <PatchQuestionFill width={width} height={height} className={classes} />
      );
    case "PauseBtnFill":
      return <PauseBtnFill width={width} height={height} className={classes} />;
    case "PauseCircleFill":
      return (
        <PauseCircleFill width={width} height={height} className={classes} />
      );
    case "PauseFill":
      return <PauseFill width={width} height={height} className={classes} />;
    case "PeaceFill":
      return <PeaceFill width={width} height={height} className={classes} />;
    case "PenFill":
      return <PenFill width={width} height={height} className={classes} />;
    case "PencilFill":
      return <PencilFill width={width} height={height} className={classes} />;
    case "PentagonFill":
      return <PentagonFill width={width} height={height} className={classes} />;
    case "PeopleFill":
      return <PeopleFill width={width} height={height} className={classes} />;
    case "PersonBadgeFill":
      return (
        <PersonBadgeFill width={width} height={height} className={classes} />
      );
    case "PersonCheckFill":
      return (
        <PersonCheckFill width={width} height={height} className={classes} />
      );
    case "PersonDashFill":
      return (
        <PersonDashFill width={width} height={height} className={classes} />
      );
    case "PersonFillAdd":
      return (
        <PersonFillAdd width={width} height={height} className={classes} />
      );
    case "PersonFillCheck":
      return (
        <PersonFillCheck width={width} height={height} className={classes} />
      );
    case "PersonFillDash":
      return (
        <PersonFillDash width={width} height={height} className={classes} />
      );
    case "PersonFillDown":
      return (
        <PersonFillDown width={width} height={height} className={classes} />
      );
    case "PersonFillExclamation":
      return (
        <PersonFillExclamation
          width={width}
          height={height}
          className={classes}
        />
      );
    case "PersonFillGear":
      return (
        <PersonFillGear width={width} height={height} className={classes} />
      );
    case "PersonFillLock":
      return (
        <PersonFillLock width={width} height={height} className={classes} />
      );
    case "PersonFillSlash":
      return (
        <PersonFillSlash width={width} height={height} className={classes} />
      );
    case "PersonFillUp":
      return <PersonFillUp width={width} height={height} className={classes} />;
    case "PersonFillX":
      return <PersonFillX width={width} height={height} className={classes} />;
    case "PersonFill":
      return <PersonFill width={width} height={height} className={classes} />;
    case "PersonLinesFill":
      return (
        <PersonLinesFill width={width} height={height} className={classes} />
      );
    case "PersonPlusFill":
      return (
        <PersonPlusFill width={width} height={height} className={classes} />
      );
    case "PersonVcardFill":
      return (
        <PersonVcardFill width={width} height={height} className={classes} />
      );
    case "PersonXFill":
      return <PersonXFill width={width} height={height} className={classes} />;
    case "PhoneFill":
      return <PhoneFill width={width} height={height} className={classes} />;
    case "PhoneLandscapeFill":
      return (
        <PhoneLandscapeFill width={width} height={height} className={classes} />
      );
    case "PhoneVibrateFill":
      return (
        <PhoneVibrateFill width={width} height={height} className={classes} />
      );
    case "PieChartFill":
      return <PieChartFill width={width} height={height} className={classes} />;
    case "PiggyBankFill":
      return (
        <PiggyBankFill width={width} height={height} className={classes} />
      );
    case "PinAngleFill":
      return <PinAngleFill width={width} height={height} className={classes} />;
    case "PinFill":
      return <PinFill width={width} height={height} className={classes} />;
    case "PinMapFill":
      return <PinMapFill width={width} height={height} className={classes} />;
    case "PipFill":
      return <PipFill width={width} height={height} className={classes} />;
    case "PlayBtnFill":
      return <PlayBtnFill width={width} height={height} className={classes} />;
    case "PlayCircleFill":
      return (
        <PlayCircleFill width={width} height={height} className={classes} />
      );
    case "PlayFill":
      return <PlayFill width={width} height={height} className={classes} />;
    case "PlugFill":
      return <PlugFill width={width} height={height} className={classes} />;
    case "PlusCircleFill":
      return (
        <PlusCircleFill width={width} height={height} className={classes} />
      );
    case "PlusSquareFill":
      return (
        <PlusSquareFill width={width} height={height} className={classes} />
      );
    case "PostageFill":
      return <PostageFill width={width} height={height} className={classes} />;
    case "PostageHeartFill":
      return (
        <PostageHeartFill width={width} height={height} className={classes} />
      );
    case "PostcardFill":
      return <PostcardFill width={width} height={height} className={classes} />;
    case "PostcardHeartFill":
      return (
        <PostcardHeartFill width={width} height={height} className={classes} />
      );
    case "PrinterFill":
      return <PrinterFill width={width} height={height} className={classes} />;
    case "ProjectorFill":
      return (
        <ProjectorFill width={width} height={height} className={classes} />
      );
    case "PuzzleFill":
      return <PuzzleFill width={width} height={height} className={classes} />;
    case "QuestionCircleFill":
      return (
        <QuestionCircleFill width={width} height={height} className={classes} />
      );
    case "QuestionDiamondFill":
      return (
        <QuestionDiamondFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "QuestionOctagonFill":
      return (
        <QuestionOctagonFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "QuestionSquareFill":
      return (
        <QuestionSquareFill width={width} height={height} className={classes} />
      );
    case "RCircleFill":
      return <RCircleFill width={width} height={height} className={classes} />;
    case "RSquareFill":
      return <RSquareFill width={width} height={height} className={classes} />;
    case "RecordBtnFill":
      return (
        <RecordBtnFill width={width} height={height} className={classes} />
      );
    case "RecordCircleFill":
      return (
        <RecordCircleFill width={width} height={height} className={classes} />
      );
    case "RecordFill":
      return <RecordFill width={width} height={height} className={classes} />;
    case "Record2Fill":
      return <Record2Fill width={width} height={height} className={classes} />;
    case "ReplyAllFill":
      return <ReplyAllFill width={width} height={height} className={classes} />;
    case "ReplyFill":
      return <ReplyFill width={width} height={height} className={classes} />;
    case "RewindBtnFill":
      return (
        <RewindBtnFill width={width} height={height} className={classes} />
      );
    case "RewindCircleFill":
      return (
        <RewindCircleFill width={width} height={height} className={classes} />
      );
    case "RewindFill":
      return <RewindFill width={width} height={height} className={classes} />;
    case "RocketFill":
      return <RocketFill width={width} height={height} className={classes} />;
    case "RocketTakeoffFill":
      return (
        <RocketTakeoffFill width={width} height={height} className={classes} />
      );
    case "RouterFill":
      return <RouterFill width={width} height={height} className={classes} />;
    case "RssFill":
      return <RssFill width={width} height={height} className={classes} />;
    case "SafeFill":
      return <SafeFill width={width} height={height} className={classes} />;
    case "Safe2Fill":
      return <Safe2Fill width={width} height={height} className={classes} />;
    case "SaveFill":
      return <SaveFill width={width} height={height} className={classes} />;
    case "Save2Fill":
      return <Save2Fill width={width} height={height} className={classes} />;
    case "SdCardFill":
      return <SdCardFill width={width} height={height} className={classes} />;
    case "SearchHeartFill":
      return (
        <SearchHeartFill width={width} height={height} className={classes} />
      );
    case "SendCheckFill":
      return (
        <SendCheckFill width={width} height={height} className={classes} />
      );
    case "SendDashFill":
      return <SendDashFill width={width} height={height} className={classes} />;
    case "SendExclamationFill":
      return (
        <SendExclamationFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "SendFill":
      return <SendFill width={width} height={height} className={classes} />;
    case "SendPlusFill":
      return <SendPlusFill width={width} height={height} className={classes} />;
    case "SendSlashFill":
      return (
        <SendSlashFill width={width} height={height} className={classes} />
      );
    case "SendXFill":
      return <SendXFill width={width} height={height} className={classes} />;
    case "ShareFill":
      return <ShareFill width={width} height={height} className={classes} />;
    case "ShieldFillCheck":
      return (
        <ShieldFillCheck width={width} height={height} className={classes} />
      );
    case "ShieldFillExclamation":
      return (
        <ShieldFillExclamation
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ShieldFillMinus":
      return (
        <ShieldFillMinus width={width} height={height} className={classes} />
      );
    case "ShieldFillPlus":
      return (
        <ShieldFillPlus width={width} height={height} className={classes} />
      );
    case "ShieldFillX":
      return <ShieldFillX width={width} height={height} className={classes} />;
    case "ShieldFill":
      return <ShieldFill width={width} height={height} className={classes} />;
    case "ShieldLockFill":
      return (
        <ShieldLockFill width={width} height={height} className={classes} />
      );
    case "ShieldSlashFill":
      return (
        <ShieldSlashFill width={width} height={height} className={classes} />
      );
    case "ShiftFill":
      return <ShiftFill width={width} height={height} className={classes} />;
    case "SignDeadEndFill":
      return (
        <SignDeadEndFill width={width} height={height} className={classes} />
      );
    case "SignDoNotEnterFill":
      return (
        <SignDoNotEnterFill width={width} height={height} className={classes} />
      );
    case "SignIntersectionFill":
      return (
        <SignIntersectionFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "SignIntersectionSideFill":
      return (
        <SignIntersectionSideFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "SignIntersectionTFill":
      return (
        <SignIntersectionTFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "SignIntersectionYFill":
      return (
        <SignIntersectionYFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "SignMergeLeftFill":
      return (
        <SignMergeLeftFill width={width} height={height} className={classes} />
      );
    case "SignMergeRightFill":
      return (
        <SignMergeRightFill width={width} height={height} className={classes} />
      );
    case "SignNoLeftTurnFill":
      return (
        <SignNoLeftTurnFill width={width} height={height} className={classes} />
      );
    case "SignNoParkingFill":
      return (
        <SignNoParkingFill width={width} height={height} className={classes} />
      );
    case "SignNoRightTurnFill":
      return (
        <SignNoRightTurnFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "SignRailroadFill":
      return (
        <SignRailroadFill width={width} height={height} className={classes} />
      );
    case "SignStopFill":
      return <SignStopFill width={width} height={height} className={classes} />;
    case "SignStopLightsFill":
      return (
        <SignStopLightsFill width={width} height={height} className={classes} />
      );
    case "SignTurnLeftFill":
      return (
        <SignTurnLeftFill width={width} height={height} className={classes} />
      );
    case "SignTurnRightFill":
      return (
        <SignTurnRightFill width={width} height={height} className={classes} />
      );
    case "SignTurnSlightLeftFill":
      return (
        <SignTurnSlightLeftFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "SignTurnSlightRightFill":
      return (
        <SignTurnSlightRightFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "SignYieldFill":
      return (
        <SignYieldFill width={width} height={height} className={classes} />
      );
    case "Signpost2Fill":
      return (
        <Signpost2Fill width={width} height={height} className={classes} />
      );
    case "SignpostFill":
      return <SignpostFill width={width} height={height} className={classes} />;
    case "SignpostSplitFill":
      return (
        <SignpostSplitFill width={width} height={height} className={classes} />
      );
    case "SimFill":
      return <SimFill width={width} height={height} className={classes} />;
    case "SkipBackwardBtnFill":
      return (
        <SkipBackwardBtnFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "SkipBackwardCircleFill":
      return (
        <SkipBackwardCircleFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "SkipBackwardFill":
      return (
        <SkipBackwardFill width={width} height={height} className={classes} />
      );
    case "SkipEndBtnFill":
      return (
        <SkipEndBtnFill width={width} height={height} className={classes} />
      );
    case "SkipEndCircleFill":
      return (
        <SkipEndCircleFill width={width} height={height} className={classes} />
      );
    case "SkipEndFill":
      return <SkipEndFill width={width} height={height} className={classes} />;
    case "SkipForwardBtnFill":
      return (
        <SkipForwardBtnFill width={width} height={height} className={classes} />
      );
    case "SkipForwardCircleFill":
      return (
        <SkipForwardCircleFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "SkipForwardFill":
      return (
        <SkipForwardFill width={width} height={height} className={classes} />
      );
    case "SkipStartBtnFill":
      return (
        <SkipStartBtnFill width={width} height={height} className={classes} />
      );
    case "SkipStartCircleFill":
      return (
        <SkipStartCircleFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "SkipStartFill":
      return (
        <SkipStartFill width={width} height={height} className={classes} />
      );
    case "SlashCircleFill":
      return (
        <SlashCircleFill width={width} height={height} className={classes} />
      );
    case "SlashSquareFill":
      return (
        <SlashSquareFill width={width} height={height} className={classes} />
      );
    case "SpeakerFill":
      return <SpeakerFill width={width} height={height} className={classes} />;
    case "SquareFill":
      return <SquareFill width={width} height={height} className={classes} />;
    case "StarFill":
      return <StarFill width={width} height={height} className={classes} />;
    case "StickiesFill":
      return <StickiesFill width={width} height={height} className={classes} />;
    case "StickyFill":
      return <StickyFill width={width} height={height} className={classes} />;
    case "StopBtnFill":
      return <StopBtnFill width={width} height={height} className={classes} />;
    case "StopCircleFill":
      return (
        <StopCircleFill width={width} height={height} className={classes} />
      );
    case "StopFill":
      return <StopFill width={width} height={height} className={classes} />;
    case "StoplightsFill":
      return (
        <StoplightsFill width={width} height={height} className={classes} />
      );
    case "StopwatchFill":
      return (
        <StopwatchFill width={width} height={height} className={classes} />
      );
    case "SuitClubFill":
      return <SuitClubFill width={width} height={height} className={classes} />;
    case "SuitDiamondFill":
      return (
        <SuitDiamondFill width={width} height={height} className={classes} />
      );
    case "SuitHeartFill":
      return (
        <SuitHeartFill width={width} height={height} className={classes} />
      );
    case "SuitSpadeFill":
      return (
        <SuitSpadeFill width={width} height={height} className={classes} />
      );
    case "SunFill":
      return <SunFill width={width} height={height} className={classes} />;
    case "SunriseFill":
      return <SunriseFill width={width} height={height} className={classes} />;
    case "SunsetFill":
      return <SunsetFill width={width} height={height} className={classes} />;
    case "TabletFill":
      return <TabletFill width={width} height={height} className={classes} />;
    case "TabletLandscapeFill":
      return (
        <TabletLandscapeFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "TagFill":
      return <TagFill width={width} height={height} className={classes} />;
    case "TagsFill":
      return <TagsFill width={width} height={height} className={classes} />;
    case "TaxiFrontFill":
      return (
        <TaxiFrontFill width={width} height={height} className={classes} />
      );
    case "TelephoneFill":
      return (
        <TelephoneFill width={width} height={height} className={classes} />
      );
    case "TelephoneForwardFill":
      return (
        <TelephoneForwardFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "TelephoneInboundFill":
      return (
        <TelephoneInboundFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "TelephoneMinusFill":
      return (
        <TelephoneMinusFill width={width} height={height} className={classes} />
      );
    case "TelephoneOutboundFill":
      return (
        <TelephoneOutboundFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "TelephonePlusFill":
      return (
        <TelephonePlusFill width={width} height={height} className={classes} />
      );
    case "TelephoneXFill":
      return (
        <TelephoneXFill width={width} height={height} className={classes} />
      );
    case "TerminalFill":
      return <TerminalFill width={width} height={height} className={classes} />;
    case "ThunderboltFill":
      return (
        <ThunderboltFill width={width} height={height} className={classes} />
      );
    case "TicketDetailedFill":
      return (
        <TicketDetailedFill width={width} height={height} className={classes} />
      );
    case "TicketFill":
      return <TicketFill width={width} height={height} className={classes} />;
    case "TicketPerforatedFill":
      return (
        <TicketPerforatedFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "TrainFreightFrontFill":
      return (
        <TrainFreightFrontFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "TrainFrontFill":
      return (
        <TrainFrontFill width={width} height={height} className={classes} />
      );
    case "TrainLightrailFrontFill":
      return (
        <TrainLightrailFrontFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "TrashFill":
      return <TrashFill width={width} height={height} className={classes} />;
    case "Trash2Fill":
      return <Trash2Fill width={width} height={height} className={classes} />;
    case "Trash3Fill":
      return <Trash3Fill width={width} height={height} className={classes} />;
    case "TreeFill":
      return <TreeFill width={width} height={height} className={classes} />;
    case "TriangleFill":
      return <TriangleFill width={width} height={height} className={classes} />;
    case "TrophyFill":
      return <TrophyFill width={width} height={height} className={classes} />;
    case "TruckFrontFill":
      return (
        <TruckFrontFill width={width} height={height} className={classes} />
      );
    case "TvFill":
      return <TvFill width={width} height={height} className={classes} />;
    case "UmbrellaFill":
      return <UmbrellaFill width={width} height={height} className={classes} />;
    case "UnlockFill":
      return <UnlockFill width={width} height={height} className={classes} />;
    case "UsbCFill":
      return <UsbCFill width={width} height={height} className={classes} />;
    case "UsbDriveFill":
      return <UsbDriveFill width={width} height={height} className={classes} />;
    case "UsbFill":
      return <UsbFill width={width} height={height} className={classes} />;
    case "UsbMicroFill":
      return <UsbMicroFill width={width} height={height} className={classes} />;
    case "UsbMiniFill":
      return <UsbMiniFill width={width} height={height} className={classes} />;
    case "UsbPlugFill":
      return <UsbPlugFill width={width} height={height} className={classes} />;
    case "VinylFill":
      return <VinylFill width={width} height={height} className={classes} />;
    case "VolumeDownFill":
      return (
        <VolumeDownFill width={width} height={height} className={classes} />
      );
    case "VolumeMuteFill":
      return (
        <VolumeMuteFill width={width} height={height} className={classes} />
      );
    case "VolumeOffFill":
      return (
        <VolumeOffFill width={width} height={height} className={classes} />
      );
    case "VolumeUpFill":
      return <VolumeUpFill width={width} height={height} className={classes} />;
    case "WalletFill":
      return <WalletFill width={width} height={height} className={classes} />;
    case "WebcamFill":
      return <WebcamFill width={width} height={height} className={classes} />;
    case "WrenchAdjustableCircleFill":
      return (
        <WrenchAdjustableCircleFill
          width={width}
          height={height}
          className={classes}
        />
      );
    case "XCircleFill":
      return <XCircleFill width={width} height={height} className={classes} />;
    case "XDiamondFill":
      return <XDiamondFill width={width} height={height} className={classes} />;
    case "XOctagonFill":
      return <XOctagonFill width={width} height={height} className={classes} />;
    case "XSquareFill":
      return <XSquareFill width={width} height={height} className={classes} />;
    default:
      return <Circle0Fill width={width} height={height} className={classes} />;
  }
};

FillIcon.defaultProps = {
  name: "Circle0Fill",
  width: "32",
  height: "32",
};
