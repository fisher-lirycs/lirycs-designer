import React from "react";
import classNames from "classnames";
import { Theme } from "../../constants/Type";
import { LionIConType } from "../../constants/Icon";
import { ReactComponent as Circle0 } from "../../assets/Icons/outline/0-circle.svg";
import { ReactComponent as Square0 } from "../../assets/Icons/outline/0-square.svg";
import { ReactComponent as Circle1 } from "../../assets/Icons/outline/1-circle.svg";
import { ReactComponent as Square1 } from "../../assets/Icons/outline/1-square.svg";
import { ReactComponent as Icon123 } from "../../assets/Icons/outline/123.svg";
import { ReactComponent as Circle2 } from "../../assets/Icons/outline/2-circle.svg";
import { ReactComponent as Square2 } from "../../assets/Icons/outline/2-square.svg";
import { ReactComponent as Circle3 } from "../../assets/Icons/outline/3-circle.svg";
import { ReactComponent as Square3 } from "../../assets/Icons/outline/3-square.svg";
import { ReactComponent as Circle4 } from "../../assets/Icons/outline/4-circle.svg";
import { ReactComponent as Square4 } from "../../assets/Icons/outline/4-square.svg";
import { ReactComponent as Circle5 } from "../../assets/Icons/outline/5-circle.svg";
import { ReactComponent as Square5 } from "../../assets/Icons/outline/5-square.svg";
import { ReactComponent as Circle6 } from "../../assets/Icons/outline/6-circle.svg";
import { ReactComponent as Square6 } from "../../assets/Icons/outline/6-square.svg";
import { ReactComponent as Circle7 } from "../../assets/Icons/outline/7-circle.svg";
import { ReactComponent as Square7 } from "../../assets/Icons/outline/7-square.svg";
import { ReactComponent as Circle8 } from "../../assets/Icons/outline/8-circle.svg";
import { ReactComponent as Square8 } from "../../assets/Icons/outline/8-square.svg";
import { ReactComponent as Circle9 } from "../../assets/Icons/outline/9-circle.svg";
import { ReactComponent as Square9 } from "../../assets/Icons/outline/9-square.svg";
import { ReactComponent as Activity } from "../../assets/Icons/outline/activity.svg";
import { ReactComponent as AirplaneEngines } from "../../assets/Icons/outline/airplane-engines.svg";
import { ReactComponent as Airplane } from "../../assets/Icons/outline/airplane.svg";
import { ReactComponent as Alarm } from "../../assets/Icons/outline/alarm.svg";
import { ReactComponent as Alexa } from "../../assets/Icons/outline/alexa.svg";
import { ReactComponent as AlignBottom } from "../../assets/Icons/outline/align-bottom.svg";
import { ReactComponent as AlignCenter } from "../../assets/Icons/outline/align-center.svg";
import { ReactComponent as AlignEnd } from "../../assets/Icons/outline/align-end.svg";
import { ReactComponent as AlignMiddle } from "../../assets/Icons/outline/align-middle.svg";
import { ReactComponent as AlignStart } from "../../assets/Icons/outline/align-start.svg";
import { ReactComponent as AlignTop } from "../../assets/Icons/outline/align-top.svg";
import { ReactComponent as Alipay } from "../../assets/Icons/outline/alipay.svg";
import { ReactComponent as Alt } from "../../assets/Icons/outline/alt.svg";
import { ReactComponent as Amd } from "../../assets/Icons/outline/amd.svg";
import { ReactComponent as Android } from "../../assets/Icons/outline/android.svg";
import { ReactComponent as Android2 } from "../../assets/Icons/outline/android2.svg";
import { ReactComponent as AppIndicator } from "../../assets/Icons/outline/app-indicator.svg";
import { ReactComponent as App } from "../../assets/Icons/outline/app.svg";
import { ReactComponent as Apple } from "../../assets/Icons/outline/apple.svg";
import { ReactComponent as Archive } from "../../assets/Icons/outline/archive.svg";
import { ReactComponent as Arrow90degDown } from "../../assets/Icons/outline/arrow-90deg-down.svg";
import { ReactComponent as Arrow90degLeft } from "../../assets/Icons/outline/arrow-90deg-left.svg";
import { ReactComponent as Arrow90degRight } from "../../assets/Icons/outline/arrow-90deg-right.svg";
import { ReactComponent as Arrow90degUp } from "../../assets/Icons/outline/arrow-90deg-up.svg";
import { ReactComponent as ArrowBarDown } from "../../assets/Icons/outline/arrow-bar-down.svg";
import { ReactComponent as ArrowBarLeft } from "../../assets/Icons/outline/arrow-bar-left.svg";
import { ReactComponent as ArrowBarRight } from "../../assets/Icons/outline/arrow-bar-right.svg";
import { ReactComponent as ArrowBarUp } from "../../assets/Icons/outline/arrow-bar-up.svg";
import { ReactComponent as ArrowClockwise } from "../../assets/Icons/outline/arrow-clockwise.svg";
import { ReactComponent as ArrowCounterclockwise } from "../../assets/Icons/outline/arrow-counterclockwise.svg";
import { ReactComponent as ArrowDownCircle } from "../../assets/Icons/outline/arrow-down-circle.svg";
import { ReactComponent as ArrowDownLeftCircle } from "../../assets/Icons/outline/arrow-down-left-circle.svg";
import { ReactComponent as ArrowDownLeftSquare } from "../../assets/Icons/outline/arrow-down-left-square.svg";
import { ReactComponent as ArrowDownLeft } from "../../assets/Icons/outline/arrow-down-left.svg";
import { ReactComponent as ArrowDownRightCircle } from "../../assets/Icons/outline/arrow-down-right-circle.svg";
import { ReactComponent as ArrowDownRightSquare } from "../../assets/Icons/outline/arrow-down-right-square.svg";
import { ReactComponent as ArrowDownRight } from "../../assets/Icons/outline/arrow-down-right.svg";
import { ReactComponent as ArrowDownShort } from "../../assets/Icons/outline/arrow-down-short.svg";
import { ReactComponent as ArrowDownSquare } from "../../assets/Icons/outline/arrow-down-square.svg";
import { ReactComponent as ArrowDownUp } from "../../assets/Icons/outline/arrow-down-up.svg";
import { ReactComponent as ArrowDown } from "../../assets/Icons/outline/arrow-down.svg";
import { ReactComponent as ArrowLeftCircle } from "../../assets/Icons/outline/arrow-left-circle.svg";
import { ReactComponent as ArrowLeftRight } from "../../assets/Icons/outline/arrow-left-right.svg";
import { ReactComponent as ArrowLeftShort } from "../../assets/Icons/outline/arrow-left-short.svg";
import { ReactComponent as ArrowLeftSquare } from "../../assets/Icons/outline/arrow-left-square.svg";
import { ReactComponent as ArrowLeft } from "../../assets/Icons/outline/arrow-left.svg";
import { ReactComponent as ArrowRepeat } from "../../assets/Icons/outline/arrow-repeat.svg";
import { ReactComponent as ArrowReturnLeft } from "../../assets/Icons/outline/arrow-return-left.svg";
import { ReactComponent as ArrowReturnRight } from "../../assets/Icons/outline/arrow-return-right.svg";
import { ReactComponent as ArrowRightCircle } from "../../assets/Icons/outline/arrow-right-circle.svg";
import { ReactComponent as ArrowRightShort } from "../../assets/Icons/outline/arrow-right-short.svg";
import { ReactComponent as ArrowRightSquare } from "../../assets/Icons/outline/arrow-right-square.svg";
import { ReactComponent as ArrowRight } from "../../assets/Icons/outline/arrow-right.svg";
import { ReactComponent as ArrowThroughHeart } from "../../assets/Icons/outline/arrow-through-heart.svg";
import { ReactComponent as ArrowUpCircle } from "../../assets/Icons/outline/arrow-up-circle.svg";
import { ReactComponent as ArrowUpLeftCircle } from "../../assets/Icons/outline/arrow-up-left-circle.svg";
import { ReactComponent as ArrowUpLeftSquare } from "../../assets/Icons/outline/arrow-up-left-square.svg";
import { ReactComponent as ArrowUpLeft } from "../../assets/Icons/outline/arrow-up-left.svg";
import { ReactComponent as ArrowUpRightCircle } from "../../assets/Icons/outline/arrow-up-right-circle.svg";
import { ReactComponent as ArrowUpRightSquare } from "../../assets/Icons/outline/arrow-up-right-square.svg";
import { ReactComponent as ArrowUpRight } from "../../assets/Icons/outline/arrow-up-right.svg";
import { ReactComponent as ArrowUpShort } from "../../assets/Icons/outline/arrow-up-short.svg";
import { ReactComponent as ArrowUpSquare } from "../../assets/Icons/outline/arrow-up-square.svg";
import { ReactComponent as ArrowUp } from "../../assets/Icons/outline/arrow-up.svg";
import { ReactComponent as ArrowsAngleContract } from "../../assets/Icons/outline/arrows-angle-contract.svg";
import { ReactComponent as ArrowsAngleExpand } from "../../assets/Icons/outline/arrows-angle-expand.svg";
import { ReactComponent as ArrowsCollapse } from "../../assets/Icons/outline/arrows-collapse.svg";
import { ReactComponent as ArrowsExpand } from "../../assets/Icons/outline/arrows-expand.svg";
import { ReactComponent as ArrowsFullscreen } from "../../assets/Icons/outline/arrows-fullscreen.svg";
import { ReactComponent as ArrowsMove } from "../../assets/Icons/outline/arrows-move.svg";
import { ReactComponent as AspectRatio } from "../../assets/Icons/outline/aspect-ratio.svg";
import { ReactComponent as Asterisk } from "../../assets/Icons/outline/asterisk.svg";
import { ReactComponent as At } from "../../assets/Icons/outline/at.svg";
import { ReactComponent as Award } from "../../assets/Icons/outline/award.svg";
import { ReactComponent as Back } from "../../assets/Icons/outline/back.svg";
import { ReactComponent as BackspaceReverse } from "../../assets/Icons/outline/backspace-reverse.svg";
import { ReactComponent as Backspace } from "../../assets/Icons/outline/backspace.svg";
import { ReactComponent as Badge3d } from "../../assets/Icons/outline/badge-3d.svg";
import { ReactComponent as Badge4k } from "../../assets/Icons/outline/badge-4k.svg";
import { ReactComponent as Badge8k } from "../../assets/Icons/outline/badge-8k.svg";
import { ReactComponent as BadgeAd } from "../../assets/Icons/outline/badge-ad.svg";
import { ReactComponent as BadgeAr } from "../../assets/Icons/outline/badge-ar.svg";
import { ReactComponent as BadgeCc } from "../../assets/Icons/outline/badge-cc.svg";
import { ReactComponent as BadgeHd } from "../../assets/Icons/outline/badge-hd.svg";
import { ReactComponent as BadgeSd } from "../../assets/Icons/outline/badge-sd.svg";
import { ReactComponent as BadgeTm } from "../../assets/Icons/outline/badge-tm.svg";
import { ReactComponent as BadgeVo } from "../../assets/Icons/outline/badge-vo.svg";
import { ReactComponent as BadgeVr } from "../../assets/Icons/outline/badge-vr.svg";
import { ReactComponent as BadgeWc } from "../../assets/Icons/outline/badge-wc.svg";
import { ReactComponent as BagCheck } from "../../assets/Icons/outline/bag-check.svg";
import { ReactComponent as BagDash } from "../../assets/Icons/outline/bag-dash.svg";
import { ReactComponent as BagHeart } from "../../assets/Icons/outline/bag-heart.svg";
import { ReactComponent as BagPlus } from "../../assets/Icons/outline/bag-plus.svg";
import { ReactComponent as BagX } from "../../assets/Icons/outline/bag-x.svg";
import { ReactComponent as Bag } from "../../assets/Icons/outline/bag.svg";
import { ReactComponent as BalloonHeart } from "../../assets/Icons/outline/balloon-heart.svg";
import { ReactComponent as Balloon } from "../../assets/Icons/outline/balloon.svg";
import { ReactComponent as Bandaid } from "../../assets/Icons/outline/bandaid.svg";
import { ReactComponent as Bank } from "../../assets/Icons/outline/bank.svg";
import { ReactComponent as Bank2 } from "../../assets/Icons/outline/bank2.svg";
import { ReactComponent as BarChartLine } from "../../assets/Icons/outline/bar-chart-line.svg";
import { ReactComponent as BarChartSteps } from "../../assets/Icons/outline/bar-chart-steps.svg";
import { ReactComponent as BarChart } from "../../assets/Icons/outline/bar-chart.svg";
import { ReactComponent as Basket } from "../../assets/Icons/outline/basket.svg";
import { ReactComponent as Basket2 } from "../../assets/Icons/outline/basket2.svg";
import { ReactComponent as Basket3 } from "../../assets/Icons/outline/basket3.svg";
import { ReactComponent as BatteryCharging } from "../../assets/Icons/outline/battery-charging.svg";
import { ReactComponent as BatteryFull } from "../../assets/Icons/outline/battery-full.svg";
import { ReactComponent as Battery } from "../../assets/Icons/outline/battery.svg";
import { ReactComponent as Behance } from "../../assets/Icons/outline/behance.svg";
import { ReactComponent as BellSlash } from "../../assets/Icons/outline/bell-slash.svg";
import { ReactComponent as Bell } from "../../assets/Icons/outline/bell.svg";
import { ReactComponent as Bezier } from "../../assets/Icons/outline/bezier.svg";
import { ReactComponent as Bezier2 } from "../../assets/Icons/outline/bezier2.svg";
import { ReactComponent as Bicycle } from "../../assets/Icons/outline/bicycle.svg";
import { ReactComponent as Binoculars } from "../../assets/Icons/outline/binoculars.svg";
import { ReactComponent as BlockquoteLeft } from "../../assets/Icons/outline/blockquote-left.svg";
import { ReactComponent as BlockquoteRight } from "../../assets/Icons/outline/blockquote-right.svg";
import { ReactComponent as Bluetooth } from "../../assets/Icons/outline/bluetooth.svg";
import { ReactComponent as BodyText } from "../../assets/Icons/outline/body-text.svg";
import { ReactComponent as Book } from "../../assets/Icons/outline/book.svg";
import { ReactComponent as BookmarkCheck } from "../../assets/Icons/outline/bookmark-check.svg";
import { ReactComponent as BookmarkDash } from "../../assets/Icons/outline/bookmark-dash.svg";
import { ReactComponent as BookmarkHeart } from "../../assets/Icons/outline/bookmark-heart.svg";
import { ReactComponent as BookmarkPlus } from "../../assets/Icons/outline/bookmark-plus.svg";
import { ReactComponent as BookmarkStar } from "../../assets/Icons/outline/bookmark-star.svg";
import { ReactComponent as BookmarkX } from "../../assets/Icons/outline/bookmark-x.svg";
import { ReactComponent as Bookmark } from "../../assets/Icons/outline/bookmark.svg";
import { ReactComponent as Bookmarks } from "../../assets/Icons/outline/bookmarks.svg";
import { ReactComponent as Bookshelf } from "../../assets/Icons/outline/bookshelf.svg";
import { ReactComponent as Boombox } from "../../assets/Icons/outline/boombox.svg";
import { ReactComponent as BorderAll } from "../../assets/Icons/outline/border-all.svg";
import { ReactComponent as BorderBottom } from "../../assets/Icons/outline/border-bottom.svg";
import { ReactComponent as BorderCenter } from "../../assets/Icons/outline/border-center.svg";
import { ReactComponent as BorderInner } from "../../assets/Icons/outline/border-inner.svg";
import { ReactComponent as BorderLeft } from "../../assets/Icons/outline/border-left.svg";
import { ReactComponent as BorderMiddle } from "../../assets/Icons/outline/border-middle.svg";
import { ReactComponent as BorderOuter } from "../../assets/Icons/outline/border-outer.svg";
import { ReactComponent as BorderRight } from "../../assets/Icons/outline/border-right.svg";
import { ReactComponent as BorderStyle } from "../../assets/Icons/outline/border-style.svg";
import { ReactComponent as BorderTop } from "../../assets/Icons/outline/border-top.svg";
import { ReactComponent as BorderWidth } from "../../assets/Icons/outline/border-width.svg";
import { ReactComponent as Border } from "../../assets/Icons/outline/border.svg";
import { ReactComponent as BoundingBoxCircles } from "../../assets/Icons/outline/bounding-box-circles.svg";
import { ReactComponent as BoundingBox } from "../../assets/Icons/outline/bounding-box.svg";
import { ReactComponent as BoxArrowDownLeft } from "../../assets/Icons/outline/box-arrow-down-left.svg";
import { ReactComponent as BoxArrowDownRight } from "../../assets/Icons/outline/box-arrow-down-right.svg";
import { ReactComponent as BoxArrowDown } from "../../assets/Icons/outline/box-arrow-down.svg";
import { ReactComponent as BoxArrowInDownLeft } from "../../assets/Icons/outline/box-arrow-in-down-left.svg";
import { ReactComponent as BoxArrowInDownRight } from "../../assets/Icons/outline/box-arrow-in-down-right.svg";
import { ReactComponent as BoxArrowInDown } from "../../assets/Icons/outline/box-arrow-in-down.svg";
import { ReactComponent as BoxArrowInLeft } from "../../assets/Icons/outline/box-arrow-in-left.svg";
import { ReactComponent as BoxArrowInRight } from "../../assets/Icons/outline/box-arrow-in-right.svg";
import { ReactComponent as BoxArrowInUpLeft } from "../../assets/Icons/outline/box-arrow-in-up-left.svg";
import { ReactComponent as BoxArrowInUpRight } from "../../assets/Icons/outline/box-arrow-in-up-right.svg";
import { ReactComponent as BoxArrowInUp } from "../../assets/Icons/outline/box-arrow-in-up.svg";
import { ReactComponent as BoxArrowLeft } from "../../assets/Icons/outline/box-arrow-left.svg";
import { ReactComponent as BoxArrowRight } from "../../assets/Icons/outline/box-arrow-right.svg";
import { ReactComponent as BoxArrowUpLeft } from "../../assets/Icons/outline/box-arrow-up-left.svg";
import { ReactComponent as BoxArrowUpRight } from "../../assets/Icons/outline/box-arrow-up-right.svg";
import { ReactComponent as BoxArrowUp } from "../../assets/Icons/outline/box-arrow-up.svg";
import { ReactComponent as BoxSeam } from "../../assets/Icons/outline/box-seam.svg";
import { ReactComponent as Box } from "../../assets/Icons/outline/box.svg";
import { ReactComponent as Box2Heart } from "../../assets/Icons/outline/box2-heart.svg";
import { ReactComponent as Box2 } from "../../assets/Icons/outline/box2.svg";
import { ReactComponent as Boxes } from "../../assets/Icons/outline/boxes.svg";
import { ReactComponent as BracesAsterisk } from "../../assets/Icons/outline/braces-asterisk.svg";
import { ReactComponent as Braces } from "../../assets/Icons/outline/braces.svg";
import { ReactComponent as Bricks } from "../../assets/Icons/outline/bricks.svg";
import { ReactComponent as Briefcase } from "../../assets/Icons/outline/briefcase.svg";
import { ReactComponent as BrightnessAltHigh } from "../../assets/Icons/outline/brightness-alt-high.svg";
import { ReactComponent as BrightnessAltLow } from "../../assets/Icons/outline/brightness-alt-low.svg";
import { ReactComponent as BrightnessHigh } from "../../assets/Icons/outline/brightness-high.svg";
import { ReactComponent as BrightnessLow } from "../../assets/Icons/outline/brightness-low.svg";
import { ReactComponent as BroadcastPin } from "../../assets/Icons/outline/broadcast-pin.svg";
import { ReactComponent as Broadcast } from "../../assets/Icons/outline/broadcast.svg";
import { ReactComponent as BrowserChrome } from "../../assets/Icons/outline/browser-chrome.svg";
import { ReactComponent as BrowserEdge } from "../../assets/Icons/outline/browser-edge.svg";
import { ReactComponent as BrowserFirefox } from "../../assets/Icons/outline/browser-firefox.svg";
import { ReactComponent as BrowserSafari } from "../../assets/Icons/outline/browser-safari.svg";
import { ReactComponent as Brush } from "../../assets/Icons/outline/brush.svg";
import { ReactComponent as Bucket } from "../../assets/Icons/outline/bucket.svg";
import { ReactComponent as Bug } from "../../assets/Icons/outline/bug.svg";
import { ReactComponent as BuildingAdd } from "../../assets/Icons/outline/building-add.svg";
import { ReactComponent as BuildingCheck } from "../../assets/Icons/outline/building-check.svg";
import { ReactComponent as BuildingDash } from "../../assets/Icons/outline/building-dash.svg";
import { ReactComponent as BuildingDown } from "../../assets/Icons/outline/building-down.svg";
import { ReactComponent as BuildingExclamation } from "../../assets/Icons/outline/building-exclamation.svg";
import { ReactComponent as BuildingGear } from "../../assets/Icons/outline/building-gear.svg";
import { ReactComponent as BuildingLock } from "../../assets/Icons/outline/building-lock.svg";
import { ReactComponent as BuildingSlash } from "../../assets/Icons/outline/building-slash.svg";
import { ReactComponent as BuildingUp } from "../../assets/Icons/outline/building-up.svg";
import { ReactComponent as BuildingX } from "../../assets/Icons/outline/building-x.svg";
import { ReactComponent as Building } from "../../assets/Icons/outline/building.svg";
import { ReactComponent as Buildings } from "../../assets/Icons/outline/buildings.svg";
import { ReactComponent as Bullseye } from "../../assets/Icons/outline/bullseye.svg";
import { ReactComponent as BusFront } from "../../assets/Icons/outline/bus-front.svg";
import { ReactComponent as CCircle } from "../../assets/Icons/outline/c-circle.svg";
import { ReactComponent as CSquare } from "../../assets/Icons/outline/c-square.svg";
import { ReactComponent as Calculator } from "../../assets/Icons/outline/calculator.svg";
import { ReactComponent as CalendarCheck } from "../../assets/Icons/outline/calendar-check.svg";
import { ReactComponent as CalendarDate } from "../../assets/Icons/outline/calendar-date.svg";
import { ReactComponent as CalendarDay } from "../../assets/Icons/outline/calendar-day.svg";
import { ReactComponent as CalendarEvent } from "../../assets/Icons/outline/calendar-event.svg";
import { ReactComponent as CalendarHeart } from "../../assets/Icons/outline/calendar-heart.svg";
import { ReactComponent as CalendarMinus } from "../../assets/Icons/outline/calendar-minus.svg";
import { ReactComponent as CalendarMonth } from "../../assets/Icons/outline/calendar-month.svg";
import { ReactComponent as CalendarPlus } from "../../assets/Icons/outline/calendar-plus.svg";
import { ReactComponent as CalendarRange } from "../../assets/Icons/outline/calendar-range.svg";
import { ReactComponent as CalendarWeek } from "../../assets/Icons/outline/calendar-week.svg";
import { ReactComponent as CalendarX } from "../../assets/Icons/outline/calendar-x.svg";
import { ReactComponent as Calendar } from "../../assets/Icons/outline/calendar.svg";
import { ReactComponent as Calendar2Check } from "../../assets/Icons/outline/calendar2-check.svg";
import { ReactComponent as Calendar2Date } from "../../assets/Icons/outline/calendar2-date.svg";
import { ReactComponent as Calendar2Day } from "../../assets/Icons/outline/calendar2-day.svg";
import { ReactComponent as Calendar2Event } from "../../assets/Icons/outline/calendar2-event.svg";
import { ReactComponent as Calendar2Heart } from "../../assets/Icons/outline/calendar2-heart.svg";
import { ReactComponent as Calendar2Minus } from "../../assets/Icons/outline/calendar2-minus.svg";
import { ReactComponent as Calendar2Month } from "../../assets/Icons/outline/calendar2-month.svg";
import { ReactComponent as Calendar2Plus } from "../../assets/Icons/outline/calendar2-plus.svg";
import { ReactComponent as Calendar2Range } from "../../assets/Icons/outline/calendar2-range.svg";
import { ReactComponent as Calendar2Week } from "../../assets/Icons/outline/calendar2-week.svg";
import { ReactComponent as Calendar2X } from "../../assets/Icons/outline/calendar2-x.svg";
import { ReactComponent as Calendar2 } from "../../assets/Icons/outline/calendar2.svg";
import { ReactComponent as Calendar3Event } from "../../assets/Icons/outline/calendar3-event.svg";
import { ReactComponent as Calendar3Range } from "../../assets/Icons/outline/calendar3-range.svg";
import { ReactComponent as Calendar3Week } from "../../assets/Icons/outline/calendar3-week.svg";
import { ReactComponent as Calendar3 } from "../../assets/Icons/outline/calendar3.svg";
import { ReactComponent as Calendar4Event } from "../../assets/Icons/outline/calendar4-event.svg";
import { ReactComponent as Calendar4Range } from "../../assets/Icons/outline/calendar4-range.svg";
import { ReactComponent as Calendar4Week } from "../../assets/Icons/outline/calendar4-week.svg";
import { ReactComponent as Calendar4 } from "../../assets/Icons/outline/calendar4.svg";
import { ReactComponent as CameraReels } from "../../assets/Icons/outline/camera-reels.svg";
import { ReactComponent as CameraVideoOff } from "../../assets/Icons/outline/camera-video-off.svg";
import { ReactComponent as CameraVideo } from "../../assets/Icons/outline/camera-video.svg";
import { ReactComponent as Camera } from "../../assets/Icons/outline/camera.svg";
import { ReactComponent as Camera2 } from "../../assets/Icons/outline/camera2.svg";
import { ReactComponent as Capslock } from "../../assets/Icons/outline/capslock.svg";
import { ReactComponent as CapsulePill } from "../../assets/Icons/outline/capsule-pill.svg";
import { ReactComponent as Capsule } from "../../assets/Icons/outline/capsule.svg";
import { ReactComponent as CarFront } from "../../assets/Icons/outline/car-front.svg";
import { ReactComponent as CardChecklist } from "../../assets/Icons/outline/card-checklist.svg";
import { ReactComponent as CardHeading } from "../../assets/Icons/outline/card-heading.svg";
import { ReactComponent as CardImage } from "../../assets/Icons/outline/card-image.svg";
import { ReactComponent as CardList } from "../../assets/Icons/outline/card-list.svg";
import { ReactComponent as CardText } from "../../assets/Icons/outline/card-text.svg";
import { ReactComponent as CaretDownSquare } from "../../assets/Icons/outline/caret-down-square.svg";
import { ReactComponent as CaretDown } from "../../assets/Icons/outline/caret-down.svg";
import { ReactComponent as CaretLeftSquare } from "../../assets/Icons/outline/caret-left-square.svg";
import { ReactComponent as CaretLeft } from "../../assets/Icons/outline/caret-left.svg";
import { ReactComponent as CaretRightSquare } from "../../assets/Icons/outline/caret-right-square.svg";
import { ReactComponent as CaretRight } from "../../assets/Icons/outline/caret-right.svg";
import { ReactComponent as CaretUpSquare } from "../../assets/Icons/outline/caret-up-square.svg";
import { ReactComponent as CaretUp } from "../../assets/Icons/outline/caret-up.svg";
import { ReactComponent as CartCheck } from "../../assets/Icons/outline/cart-check.svg";
import { ReactComponent as CartDash } from "../../assets/Icons/outline/cart-dash.svg";
import { ReactComponent as CartPlus } from "../../assets/Icons/outline/cart-plus.svg";
import { ReactComponent as CartX } from "../../assets/Icons/outline/cart-x.svg";
import { ReactComponent as Cart } from "../../assets/Icons/outline/cart.svg";
import { ReactComponent as Cart2 } from "../../assets/Icons/outline/cart2.svg";
import { ReactComponent as Cart3 } from "../../assets/Icons/outline/cart3.svg";
import { ReactComponent as Cart4 } from "../../assets/Icons/outline/cart4.svg";
import { ReactComponent as CashCoin } from "../../assets/Icons/outline/cash-coin.svg";
import { ReactComponent as CashStack } from "../../assets/Icons/outline/cash-stack.svg";
import { ReactComponent as Cash } from "../../assets/Icons/outline/cash.svg";
import { ReactComponent as Cassette } from "../../assets/Icons/outline/cassette.svg";
import { ReactComponent as Cast } from "../../assets/Icons/outline/cast.svg";
import { ReactComponent as CcCircle } from "../../assets/Icons/outline/cc-circle.svg";
import { ReactComponent as CcSquare } from "../../assets/Icons/outline/cc-square.svg";
import { ReactComponent as ChatDots } from "../../assets/Icons/outline/chat-dots.svg";
import { ReactComponent as ChatHeart } from "../../assets/Icons/outline/chat-heart.svg";
import { ReactComponent as ChatLeftDots } from "../../assets/Icons/outline/chat-left-dots.svg";
import { ReactComponent as ChatLeftHeart } from "../../assets/Icons/outline/chat-left-heart.svg";
import { ReactComponent as ChatLeftQuote } from "../../assets/Icons/outline/chat-left-quote.svg";
import { ReactComponent as ChatLeftText } from "../../assets/Icons/outline/chat-left-text.svg";
import { ReactComponent as ChatLeft } from "../../assets/Icons/outline/chat-left.svg";
import { ReactComponent as ChatQuote } from "../../assets/Icons/outline/chat-quote.svg";
import { ReactComponent as ChatRightDots } from "../../assets/Icons/outline/chat-right-dots.svg";
import { ReactComponent as ChatRightHeart } from "../../assets/Icons/outline/chat-right-heart.svg";
import { ReactComponent as ChatRightQuote } from "../../assets/Icons/outline/chat-right-quote.svg";
import { ReactComponent as ChatRightText } from "../../assets/Icons/outline/chat-right-text.svg";
import { ReactComponent as ChatRight } from "../../assets/Icons/outline/chat-right.svg";
import { ReactComponent as ChatSquareDots } from "../../assets/Icons/outline/chat-square-dots.svg";
import { ReactComponent as ChatSquareHeart } from "../../assets/Icons/outline/chat-square-heart.svg";
import { ReactComponent as ChatSquareQuote } from "../../assets/Icons/outline/chat-square-quote.svg";
import { ReactComponent as ChatSquareText } from "../../assets/Icons/outline/chat-square-text.svg";
import { ReactComponent as ChatSquare } from "../../assets/Icons/outline/chat-square.svg";
import { ReactComponent as ChatText } from "../../assets/Icons/outline/chat-text.svg";
import { ReactComponent as Chat } from "../../assets/Icons/outline/chat.svg";
import { ReactComponent as CheckAll } from "../../assets/Icons/outline/check-all.svg";
import { ReactComponent as CheckCircle } from "../../assets/Icons/outline/check-circle.svg";
import { ReactComponent as CheckLg } from "../../assets/Icons/outline/check-lg.svg";
import { ReactComponent as CheckSquare } from "../../assets/Icons/outline/check-square.svg";
import { ReactComponent as Check } from "../../assets/Icons/outline/check.svg";
import { ReactComponent as Check2All } from "../../assets/Icons/outline/check2-all.svg";
import { ReactComponent as Check2Circle } from "../../assets/Icons/outline/check2-circle.svg";
import { ReactComponent as Check2Square } from "../../assets/Icons/outline/check2-square.svg";
import { ReactComponent as Check2 } from "../../assets/Icons/outline/check2.svg";
import { ReactComponent as ChevronBarContract } from "../../assets/Icons/outline/chevron-bar-contract.svg";
import { ReactComponent as ChevronBarDown } from "../../assets/Icons/outline/chevron-bar-down.svg";
import { ReactComponent as ChevronBarExpand } from "../../assets/Icons/outline/chevron-bar-expand.svg";
import { ReactComponent as ChevronBarLeft } from "../../assets/Icons/outline/chevron-bar-left.svg";
import { ReactComponent as ChevronBarRight } from "../../assets/Icons/outline/chevron-bar-right.svg";
import { ReactComponent as ChevronBarUp } from "../../assets/Icons/outline/chevron-bar-up.svg";
import { ReactComponent as ChevronCompactDown } from "../../assets/Icons/outline/chevron-compact-down.svg";
import { ReactComponent as ChevronCompactLeft } from "../../assets/Icons/outline/chevron-compact-left.svg";
import { ReactComponent as ChevronCompactRight } from "../../assets/Icons/outline/chevron-compact-right.svg";
import { ReactComponent as ChevronCompactUp } from "../../assets/Icons/outline/chevron-compact-up.svg";
import { ReactComponent as ChevronContract } from "../../assets/Icons/outline/chevron-contract.svg";
import { ReactComponent as ChevronDoubleDown } from "../../assets/Icons/outline/chevron-double-down.svg";
import { ReactComponent as ChevronDoubleLeft } from "../../assets/Icons/outline/chevron-double-left.svg";
import { ReactComponent as ChevronDoubleRight } from "../../assets/Icons/outline/chevron-double-right.svg";
import { ReactComponent as ChevronDoubleUp } from "../../assets/Icons/outline/chevron-double-up.svg";
import { ReactComponent as ChevronDown } from "../../assets/Icons/outline/chevron-down.svg";
import { ReactComponent as ChevronExpand } from "../../assets/Icons/outline/chevron-expand.svg";
import { ReactComponent as ChevronLeft } from "../../assets/Icons/outline/chevron-left.svg";
import { ReactComponent as ChevronRight } from "../../assets/Icons/outline/chevron-right.svg";
import { ReactComponent as ChevronUp } from "../../assets/Icons/outline/chevron-up.svg";
import { ReactComponent as CircleSquare } from "../../assets/Icons/outline/circle-square.svg";
import { ReactComponent as Circle } from "../../assets/Icons/outline/circle.svg";
import { ReactComponent as ClipboardCheck } from "../../assets/Icons/outline/clipboard-check.svg";
import { ReactComponent as ClipboardData } from "../../assets/Icons/outline/clipboard-data.svg";
import { ReactComponent as ClipboardHeart } from "../../assets/Icons/outline/clipboard-heart.svg";
import { ReactComponent as ClipboardMinus } from "../../assets/Icons/outline/clipboard-minus.svg";
import { ReactComponent as ClipboardPlus } from "../../assets/Icons/outline/clipboard-plus.svg";
import { ReactComponent as ClipboardPulse } from "../../assets/Icons/outline/clipboard-pulse.svg";
import { ReactComponent as ClipboardX } from "../../assets/Icons/outline/clipboard-x.svg";
import { ReactComponent as Clipboard } from "../../assets/Icons/outline/clipboard.svg";
import { ReactComponent as Clipboard2Check } from "../../assets/Icons/outline/clipboard2-check.svg";
import { ReactComponent as Clipboard2Data } from "../../assets/Icons/outline/clipboard2-data.svg";
import { ReactComponent as Clipboard2Heart } from "../../assets/Icons/outline/clipboard2-heart.svg";
import { ReactComponent as Clipboard2Minus } from "../../assets/Icons/outline/clipboard2-minus.svg";
import { ReactComponent as Clipboard2Plus } from "../../assets/Icons/outline/clipboard2-plus.svg";
import { ReactComponent as Clipboard2Pulse } from "../../assets/Icons/outline/clipboard2-pulse.svg";
import { ReactComponent as Clipboard2X } from "../../assets/Icons/outline/clipboard2-x.svg";
import { ReactComponent as Clipboard2 } from "../../assets/Icons/outline/clipboard2.svg";
import { ReactComponent as ClockHistory } from "../../assets/Icons/outline/clock-history.svg";
import { ReactComponent as Clock } from "../../assets/Icons/outline/clock.svg";
import { ReactComponent as CloudArrowDown } from "../../assets/Icons/outline/cloud-arrow-down.svg";
import { ReactComponent as CloudArrowUp } from "../../assets/Icons/outline/cloud-arrow-up.svg";
import { ReactComponent as CloudCheck } from "../../assets/Icons/outline/cloud-check.svg";
import { ReactComponent as CloudDownload } from "../../assets/Icons/outline/cloud-download.svg";
import { ReactComponent as CloudDrizzle } from "../../assets/Icons/outline/cloud-drizzle.svg";
import { ReactComponent as CloudFog } from "../../assets/Icons/outline/cloud-fog.svg";
import { ReactComponent as CloudFog2 } from "../../assets/Icons/outline/cloud-fog2.svg";
import { ReactComponent as CloudHail } from "../../assets/Icons/outline/cloud-hail.svg";
import { ReactComponent as CloudHaze } from "../../assets/Icons/outline/cloud-haze.svg";
import { ReactComponent as CloudHaze2 } from "../../assets/Icons/outline/cloud-haze2.svg";
import { ReactComponent as CloudLightningRain } from "../../assets/Icons/outline/cloud-lightning-rain.svg";
import { ReactComponent as CloudLightning } from "../../assets/Icons/outline/cloud-lightning.svg";
import { ReactComponent as CloudMinus } from "../../assets/Icons/outline/cloud-minus.svg";
import { ReactComponent as CloudMoon } from "../../assets/Icons/outline/cloud-moon.svg";
import { ReactComponent as CloudPlus } from "../../assets/Icons/outline/cloud-plus.svg";
import { ReactComponent as CloudRainHeavy } from "../../assets/Icons/outline/cloud-rain-heavy.svg";
import { ReactComponent as CloudRain } from "../../assets/Icons/outline/cloud-rain.svg";
import { ReactComponent as CloudSlash } from "../../assets/Icons/outline/cloud-slash.svg";
import { ReactComponent as CloudSleet } from "../../assets/Icons/outline/cloud-sleet.svg";
import { ReactComponent as CloudSnow } from "../../assets/Icons/outline/cloud-snow.svg";
import { ReactComponent as CloudSun } from "../../assets/Icons/outline/cloud-sun.svg";
import { ReactComponent as CloudUpload } from "../../assets/Icons/outline/cloud-upload.svg";
import { ReactComponent as Cloud } from "../../assets/Icons/outline/cloud.svg";
import { ReactComponent as Clouds } from "../../assets/Icons/outline/clouds.svg";
import { ReactComponent as Cloudy } from "../../assets/Icons/outline/cloudy.svg";
import { ReactComponent as CodeSlash } from "../../assets/Icons/outline/code-slash.svg";
import { ReactComponent as CodeSquare } from "../../assets/Icons/outline/code-square.svg";
import { ReactComponent as Code } from "../../assets/Icons/outline/code.svg";
import { ReactComponent as Coin } from "../../assets/Icons/outline/coin.svg";
import { ReactComponent as CollectionPlay } from "../../assets/Icons/outline/collection-play.svg";
import { ReactComponent as Collection } from "../../assets/Icons/outline/collection.svg";
import { ReactComponent as ColumnsGap } from "../../assets/Icons/outline/columns-gap.svg";
import { ReactComponent as Columns } from "../../assets/Icons/outline/columns.svg";
import { ReactComponent as Command } from "../../assets/Icons/outline/command.svg";
import { ReactComponent as Compass } from "../../assets/Icons/outline/compass.svg";
import { ReactComponent as ConeStriped } from "../../assets/Icons/outline/cone-striped.svg";
import { ReactComponent as Cone } from "../../assets/Icons/outline/cone.svg";
import { ReactComponent as Controller } from "../../assets/Icons/outline/controller.svg";
import { ReactComponent as Cpu } from "../../assets/Icons/outline/cpu.svg";
import { ReactComponent as CreditCard2Back } from "../../assets/Icons/outline/credit-card-2-back.svg";
import { ReactComponent as CreditCard2Front } from "../../assets/Icons/outline/credit-card-2-front.svg";
import { ReactComponent as CreditCard } from "../../assets/Icons/outline/credit-card.svg";
import { ReactComponent as Crop } from "../../assets/Icons/outline/crop.svg";
import { ReactComponent as CupHot } from "../../assets/Icons/outline/cup-hot.svg";
import { ReactComponent as CupStraw } from "../../assets/Icons/outline/cup-straw.svg";
import { ReactComponent as Cup } from "../../assets/Icons/outline/cup.svg";
import { ReactComponent as CurrencyBitcoin } from "../../assets/Icons/outline/currency-bitcoin.svg";
import { ReactComponent as CurrencyDollar } from "../../assets/Icons/outline/currency-dollar.svg";
import { ReactComponent as CurrencyEuro } from "../../assets/Icons/outline/currency-euro.svg";
import { ReactComponent as CurrencyExchange } from "../../assets/Icons/outline/currency-exchange.svg";
import { ReactComponent as CurrencyPound } from "../../assets/Icons/outline/currency-pound.svg";
import { ReactComponent as CurrencyRupee } from "../../assets/Icons/outline/currency-rupee.svg";
import { ReactComponent as CurrencyYen } from "../../assets/Icons/outline/currency-yen.svg";
import { ReactComponent as CursorText } from "../../assets/Icons/outline/cursor-text.svg";
import { ReactComponent as Cursor } from "../../assets/Icons/outline/cursor.svg";
import { ReactComponent as DashCircleDotted } from "../../assets/Icons/outline/dash-circle-dotted.svg";
import { ReactComponent as DashCircle } from "../../assets/Icons/outline/dash-circle.svg";
import { ReactComponent as DashLg } from "../../assets/Icons/outline/dash-lg.svg";
import { ReactComponent as DashSquareDotted } from "../../assets/Icons/outline/dash-square-dotted.svg";
import { ReactComponent as DashSquare } from "../../assets/Icons/outline/dash-square.svg";
import { ReactComponent as Dash } from "../../assets/Icons/outline/dash.svg";
import { ReactComponent as DatabaseAdd } from "../../assets/Icons/outline/database-add.svg";
import { ReactComponent as DatabaseCheck } from "../../assets/Icons/outline/database-check.svg";
import { ReactComponent as DatabaseDash } from "../../assets/Icons/outline/database-dash.svg";
import { ReactComponent as DatabaseDown } from "../../assets/Icons/outline/database-down.svg";
import { ReactComponent as DatabaseExclamation } from "../../assets/Icons/outline/database-exclamation.svg";
import { ReactComponent as DatabaseGear } from "../../assets/Icons/outline/database-gear.svg";
import { ReactComponent as DatabaseLock } from "../../assets/Icons/outline/database-lock.svg";
import { ReactComponent as DatabaseSlash } from "../../assets/Icons/outline/database-slash.svg";
import { ReactComponent as DatabaseUp } from "../../assets/Icons/outline/database-up.svg";
import { ReactComponent as DatabaseX } from "../../assets/Icons/outline/database-x.svg";
import { ReactComponent as Database } from "../../assets/Icons/outline/database.svg";
import { ReactComponent as DeviceHdd } from "../../assets/Icons/outline/device-hdd.svg";
import { ReactComponent as DeviceSsd } from "../../assets/Icons/outline/device-ssd.svg";
import { ReactComponent as Diagram2 } from "../../assets/Icons/outline/diagram-2.svg";
import { ReactComponent as Diagram3 } from "../../assets/Icons/outline/diagram-3.svg";
import { ReactComponent as Diamond } from "../../assets/Icons/outline/diamond.svg";
import { ReactComponent as Dice1 } from "../../assets/Icons/outline/dice-1.svg";
import { ReactComponent as Dice2 } from "../../assets/Icons/outline/dice-2.svg";
import { ReactComponent as Dice3 } from "../../assets/Icons/outline/dice-3.svg";
import { ReactComponent as Dice4 } from "../../assets/Icons/outline/dice-4.svg";
import { ReactComponent as Dice5 } from "../../assets/Icons/outline/dice-5.svg";
import { ReactComponent as Dice6 } from "../../assets/Icons/outline/dice-6.svg";
import { ReactComponent as Disc } from "../../assets/Icons/outline/disc.svg";
import { ReactComponent as Discord } from "../../assets/Icons/outline/discord.svg";
import { ReactComponent as Display } from "../../assets/Icons/outline/display.svg";
import { ReactComponent as Displayport } from "../../assets/Icons/outline/displayport.svg";
import { ReactComponent as DistributeHorizontal } from "../../assets/Icons/outline/distribute-horizontal.svg";
import { ReactComponent as DistributeVertical } from "../../assets/Icons/outline/distribute-vertical.svg";
import { ReactComponent as DoorClosed } from "../../assets/Icons/outline/door-closed.svg";
import { ReactComponent as DoorOpen } from "../../assets/Icons/outline/door-open.svg";
import { ReactComponent as Dot } from "../../assets/Icons/outline/dot.svg";
import { ReactComponent as Download } from "../../assets/Icons/outline/download.svg";
import { ReactComponent as Dpad } from "../../assets/Icons/outline/dpad.svg";
import { ReactComponent as Dribbble } from "../../assets/Icons/outline/dribbble.svg";
import { ReactComponent as Dropbox } from "../../assets/Icons/outline/dropbox.svg";
import { ReactComponent as Droplet } from "../../assets/Icons/outline/droplet.svg";
import { ReactComponent as Ear } from "../../assets/Icons/outline/ear.svg";
import { ReactComponent as Earbuds } from "../../assets/Icons/outline/earbuds.svg";
import { ReactComponent as Easel } from "../../assets/Icons/outline/easel.svg";
import { ReactComponent as Easel2 } from "../../assets/Icons/outline/easel2.svg";
import { ReactComponent as Easel3 } from "../../assets/Icons/outline/easel3.svg";
import { ReactComponent as EggFried } from "../../assets/Icons/outline/egg-fried.svg";
import { ReactComponent as Egg } from "../../assets/Icons/outline/egg.svg";
import { ReactComponent as Eject } from "../../assets/Icons/outline/eject.svg";
import { ReactComponent as EmojiAngry } from "../../assets/Icons/outline/emoji-angry.svg";
import { ReactComponent as EmojiDizzy } from "../../assets/Icons/outline/emoji-dizzy.svg";
import { ReactComponent as EmojiExpressionless } from "../../assets/Icons/outline/emoji-expressionless.svg";
import { ReactComponent as EmojiFrown } from "../../assets/Icons/outline/emoji-frown.svg";
import { ReactComponent as EmojiHeartEyes } from "../../assets/Icons/outline/emoji-heart-eyes.svg";
import { ReactComponent as EmojiKiss } from "../../assets/Icons/outline/emoji-kiss.svg";
import { ReactComponent as EmojiLaughing } from "../../assets/Icons/outline/emoji-laughing.svg";
import { ReactComponent as EmojiNeutral } from "../../assets/Icons/outline/emoji-neutral.svg";
import { ReactComponent as EmojiSmileUpsideDown } from "../../assets/Icons/outline/emoji-smile-upside-down.svg";
import { ReactComponent as EmojiSmile } from "../../assets/Icons/outline/emoji-smile.svg";
import { ReactComponent as EmojiSunglasses } from "../../assets/Icons/outline/emoji-sunglasses.svg";
import { ReactComponent as EmojiWink } from "../../assets/Icons/outline/emoji-wink.svg";
import { ReactComponent as EnvelopeAt } from "../../assets/Icons/outline/envelope-at.svg";
import { ReactComponent as EnvelopeCheck } from "../../assets/Icons/outline/envelope-check.svg";
import { ReactComponent as EnvelopeDash } from "../../assets/Icons/outline/envelope-dash.svg";
import { ReactComponent as EnvelopeExclamation } from "../../assets/Icons/outline/envelope-exclamation.svg";
import { ReactComponent as EnvelopeHeart } from "../../assets/Icons/outline/envelope-heart.svg";
import { ReactComponent as EnvelopeOpenHeart } from "../../assets/Icons/outline/envelope-open-heart.svg";
import { ReactComponent as EnvelopeOpen } from "../../assets/Icons/outline/envelope-open.svg";
import { ReactComponent as EnvelopePaperHeart } from "../../assets/Icons/outline/envelope-paper-heart.svg";
import { ReactComponent as EnvelopePaper } from "../../assets/Icons/outline/envelope-paper.svg";
import { ReactComponent as EnvelopePlus } from "../../assets/Icons/outline/envelope-plus.svg";
import { ReactComponent as EnvelopeSlash } from "../../assets/Icons/outline/envelope-slash.svg";
import { ReactComponent as EnvelopeX } from "../../assets/Icons/outline/envelope-x.svg";
import { ReactComponent as Envelope } from "../../assets/Icons/outline/envelope.svg";
import { ReactComponent as Eraser } from "../../assets/Icons/outline/eraser.svg";
import { ReactComponent as Escape } from "../../assets/Icons/outline/escape.svg";
import { ReactComponent as Ethernet } from "../../assets/Icons/outline/ethernet.svg";
import { ReactComponent as EvFront } from "../../assets/Icons/outline/ev-front.svg";
import { ReactComponent as EvStation } from "../../assets/Icons/outline/ev-station.svg";
import { ReactComponent as ExclamationCircle } from "../../assets/Icons/outline/exclamation-circle.svg";
import { ReactComponent as ExclamationDiamond } from "../../assets/Icons/outline/exclamation-diamond.svg";
import { ReactComponent as ExclamationLg } from "../../assets/Icons/outline/exclamation-lg.svg";
import { ReactComponent as ExclamationOctagon } from "../../assets/Icons/outline/exclamation-octagon.svg";
import { ReactComponent as ExclamationSquare } from "../../assets/Icons/outline/exclamation-square.svg";
import { ReactComponent as ExclamationTriangle } from "../../assets/Icons/outline/exclamation-triangle.svg";
import { ReactComponent as Exclamation } from "../../assets/Icons/outline/exclamation.svg";
import { ReactComponent as Exclude } from "../../assets/Icons/outline/exclude.svg";
import { ReactComponent as Explicit } from "../../assets/Icons/outline/explicit.svg";
import { ReactComponent as EyeSlash } from "../../assets/Icons/outline/eye-slash.svg";
import { ReactComponent as Eye } from "../../assets/Icons/outline/eye.svg";
import { ReactComponent as Eyedropper } from "../../assets/Icons/outline/eyedropper.svg";
import { ReactComponent as Eyeglasses } from "../../assets/Icons/outline/eyeglasses.svg";
import { ReactComponent as Facebook } from "../../assets/Icons/outline/facebook.svg";
import { ReactComponent as Fan } from "../../assets/Icons/outline/fan.svg";
import { ReactComponent as FastForwardBtn } from "../../assets/Icons/outline/fast-forward-btn.svg";
import { ReactComponent as FastForwardCircle } from "../../assets/Icons/outline/fast-forward-circle.svg";
import { ReactComponent as FastForward } from "../../assets/Icons/outline/fast-forward.svg";
import { ReactComponent as FileArrowDown } from "../../assets/Icons/outline/file-arrow-down.svg";
import { ReactComponent as FileArrowUp } from "../../assets/Icons/outline/file-arrow-up.svg";
import { ReactComponent as FileBarGraph } from "../../assets/Icons/outline/file-bar-graph.svg";
import { ReactComponent as FileBinary } from "../../assets/Icons/outline/file-binary.svg";
import { ReactComponent as FileBreak } from "../../assets/Icons/outline/file-break.svg";
import { ReactComponent as FileCheck } from "../../assets/Icons/outline/file-check.svg";
import { ReactComponent as FileCode } from "../../assets/Icons/outline/file-code.svg";
import { ReactComponent as FileDiff } from "../../assets/Icons/outline/file-diff.svg";
import { ReactComponent as FileEarmarkArrowDown } from "../../assets/Icons/outline/file-earmark-arrow-down.svg";
import { ReactComponent as FileEarmarkArrowUp } from "../../assets/Icons/outline/file-earmark-arrow-up.svg";
import { ReactComponent as FileEarmarkBarGraph } from "../../assets/Icons/outline/file-earmark-bar-graph.svg";
import { ReactComponent as FileEarmarkBinary } from "../../assets/Icons/outline/file-earmark-binary.svg";
import { ReactComponent as FileEarmarkBreak } from "../../assets/Icons/outline/file-earmark-break.svg";
import { ReactComponent as FileEarmarkCheck } from "../../assets/Icons/outline/file-earmark-check.svg";
import { ReactComponent as FileEarmarkCode } from "../../assets/Icons/outline/file-earmark-code.svg";
import { ReactComponent as FileEarmarkDiff } from "../../assets/Icons/outline/file-earmark-diff.svg";
import { ReactComponent as FileEarmarkEasel } from "../../assets/Icons/outline/file-earmark-easel.svg";
import { ReactComponent as FileEarmarkExcel } from "../../assets/Icons/outline/file-earmark-excel.svg";
import { ReactComponent as FileEarmarkFont } from "../../assets/Icons/outline/file-earmark-font.svg";
import { ReactComponent as FileEarmarkImage } from "../../assets/Icons/outline/file-earmark-image.svg";
import { ReactComponent as FileEarmarkLock } from "../../assets/Icons/outline/file-earmark-lock.svg";
import { ReactComponent as FileEarmarkLock2 } from "../../assets/Icons/outline/file-earmark-lock2.svg";
import { ReactComponent as FileEarmarkMedical } from "../../assets/Icons/outline/file-earmark-medical.svg";
import { ReactComponent as FileEarmarkMinus } from "../../assets/Icons/outline/file-earmark-minus.svg";
import { ReactComponent as FileEarmarkMusic } from "../../assets/Icons/outline/file-earmark-music.svg";
import { ReactComponent as FileEarmarkPdf } from "../../assets/Icons/outline/file-earmark-pdf.svg";
import { ReactComponent as FileEarmarkPerson } from "../../assets/Icons/outline/file-earmark-person.svg";
import { ReactComponent as FileEarmarkPlay } from "../../assets/Icons/outline/file-earmark-play.svg";
import { ReactComponent as FileEarmarkPlus } from "../../assets/Icons/outline/file-earmark-plus.svg";
import { ReactComponent as FileEarmarkPost } from "../../assets/Icons/outline/file-earmark-post.svg";
import { ReactComponent as FileEarmarkPpt } from "../../assets/Icons/outline/file-earmark-ppt.svg";
import { ReactComponent as FileEarmarkRichtext } from "../../assets/Icons/outline/file-earmark-richtext.svg";
import { ReactComponent as FileEarmarkRuled } from "../../assets/Icons/outline/file-earmark-ruled.svg";
import { ReactComponent as FileEarmarkSlides } from "../../assets/Icons/outline/file-earmark-slides.svg";
import { ReactComponent as FileEarmarkSpreadsheet } from "../../assets/Icons/outline/file-earmark-spreadsheet.svg";
import { ReactComponent as FileEarmarkText } from "../../assets/Icons/outline/file-earmark-text.svg";
import { ReactComponent as FileEarmarkWord } from "../../assets/Icons/outline/file-earmark-word.svg";
import { ReactComponent as FileEarmarkX } from "../../assets/Icons/outline/file-earmark-x.svg";
import { ReactComponent as FileEarmarkZip } from "../../assets/Icons/outline/file-earmark-zip.svg";
import { ReactComponent as FileEarmark } from "../../assets/Icons/outline/file-earmark.svg";
import { ReactComponent as FileEasel } from "../../assets/Icons/outline/file-easel.svg";
import { ReactComponent as FileExcel } from "../../assets/Icons/outline/file-excel.svg";
import { ReactComponent as FileFont } from "../../assets/Icons/outline/file-font.svg";
import { ReactComponent as FileImage } from "../../assets/Icons/outline/file-image.svg";
import { ReactComponent as FileLock } from "../../assets/Icons/outline/file-lock.svg";
import { ReactComponent as FileLock2 } from "../../assets/Icons/outline/file-lock2.svg";
import { ReactComponent as FileMedical } from "../../assets/Icons/outline/file-medical.svg";
import { ReactComponent as FileMinus } from "../../assets/Icons/outline/file-minus.svg";
import { ReactComponent as FileMusic } from "../../assets/Icons/outline/file-music.svg";
import { ReactComponent as FilePdf } from "../../assets/Icons/outline/file-pdf.svg";
import { ReactComponent as FilePerson } from "../../assets/Icons/outline/file-person.svg";
import { ReactComponent as FilePlay } from "../../assets/Icons/outline/file-play.svg";
import { ReactComponent as FilePlus } from "../../assets/Icons/outline/file-plus.svg";
import { ReactComponent as FilePost } from "../../assets/Icons/outline/file-post.svg";
import { ReactComponent as FilePpt } from "../../assets/Icons/outline/file-ppt.svg";
import { ReactComponent as FileRichtext } from "../../assets/Icons/outline/file-richtext.svg";
import { ReactComponent as FileRuled } from "../../assets/Icons/outline/file-ruled.svg";
import { ReactComponent as FileSlides } from "../../assets/Icons/outline/file-slides.svg";
import { ReactComponent as FileSpreadsheet } from "../../assets/Icons/outline/file-spreadsheet.svg";
import { ReactComponent as FileText } from "../../assets/Icons/outline/file-text.svg";
import { ReactComponent as FileWord } from "../../assets/Icons/outline/file-word.svg";
import { ReactComponent as FileX } from "../../assets/Icons/outline/file-x.svg";
import { ReactComponent as FileZip } from "../../assets/Icons/outline/file-zip.svg";
import { ReactComponent as File } from "../../assets/Icons/outline/file.svg";
import { ReactComponent as FilesAlt } from "../../assets/Icons/outline/files-alt.svg";
import { ReactComponent as Files } from "../../assets/Icons/outline/files.svg";
import { ReactComponent as FiletypeAac } from "../../assets/Icons/outline/filetype-aac.svg";
import { ReactComponent as FiletypeAi } from "../../assets/Icons/outline/filetype-ai.svg";
import { ReactComponent as FiletypeBmp } from "../../assets/Icons/outline/filetype-bmp.svg";
import { ReactComponent as FiletypeCs } from "../../assets/Icons/outline/filetype-cs.svg";
import { ReactComponent as FiletypeCss } from "../../assets/Icons/outline/filetype-css.svg";
import { ReactComponent as FiletypeCsv } from "../../assets/Icons/outline/filetype-csv.svg";
import { ReactComponent as FiletypeDoc } from "../../assets/Icons/outline/filetype-doc.svg";
import { ReactComponent as FiletypeDocx } from "../../assets/Icons/outline/filetype-docx.svg";
import { ReactComponent as FiletypeExe } from "../../assets/Icons/outline/filetype-exe.svg";
import { ReactComponent as FiletypeGif } from "../../assets/Icons/outline/filetype-gif.svg";
import { ReactComponent as FiletypeHeic } from "../../assets/Icons/outline/filetype-heic.svg";
import { ReactComponent as FiletypeHtml } from "../../assets/Icons/outline/filetype-html.svg";
import { ReactComponent as FiletypeJava } from "../../assets/Icons/outline/filetype-java.svg";
import { ReactComponent as FiletypeJpg } from "../../assets/Icons/outline/filetype-jpg.svg";
import { ReactComponent as FiletypeJs } from "../../assets/Icons/outline/filetype-js.svg";
import { ReactComponent as FiletypeJson } from "../../assets/Icons/outline/filetype-json.svg";
import { ReactComponent as FiletypeJsx } from "../../assets/Icons/outline/filetype-jsx.svg";
import { ReactComponent as FiletypeKey } from "../../assets/Icons/outline/filetype-key.svg";
import { ReactComponent as FiletypeM4p } from "../../assets/Icons/outline/filetype-m4p.svg";
import { ReactComponent as FiletypeMd } from "../../assets/Icons/outline/filetype-md.svg";
import { ReactComponent as FiletypeMdx } from "../../assets/Icons/outline/filetype-mdx.svg";
import { ReactComponent as FiletypeMov } from "../../assets/Icons/outline/filetype-mov.svg";
import { ReactComponent as FiletypeMp3 } from "../../assets/Icons/outline/filetype-mp3.svg";
import { ReactComponent as FiletypeMp4 } from "../../assets/Icons/outline/filetype-mp4.svg";
import { ReactComponent as FiletypeOtf } from "../../assets/Icons/outline/filetype-otf.svg";
import { ReactComponent as FiletypePdf } from "../../assets/Icons/outline/filetype-pdf.svg";
import { ReactComponent as FiletypePhp } from "../../assets/Icons/outline/filetype-php.svg";
import { ReactComponent as FiletypePng } from "../../assets/Icons/outline/filetype-png.svg";
import { ReactComponent as FiletypePpt } from "../../assets/Icons/outline/filetype-ppt.svg";
import { ReactComponent as FiletypePptx } from "../../assets/Icons/outline/filetype-pptx.svg";
import { ReactComponent as FiletypePsd } from "../../assets/Icons/outline/filetype-psd.svg";
import { ReactComponent as FiletypePy } from "../../assets/Icons/outline/filetype-py.svg";
import { ReactComponent as FiletypeRaw } from "../../assets/Icons/outline/filetype-raw.svg";
import { ReactComponent as FiletypeRb } from "../../assets/Icons/outline/filetype-rb.svg";
import { ReactComponent as FiletypeSass } from "../../assets/Icons/outline/filetype-sass.svg";
import { ReactComponent as FiletypeScss } from "../../assets/Icons/outline/filetype-scss.svg";
import { ReactComponent as FiletypeSh } from "../../assets/Icons/outline/filetype-sh.svg";
import { ReactComponent as FiletypeSql } from "../../assets/Icons/outline/filetype-sql.svg";
import { ReactComponent as FiletypeTiff } from "../../assets/Icons/outline/filetype-tiff.svg";
import { ReactComponent as FiletypeTsx } from "../../assets/Icons/outline/filetype-tsx.svg";
import { ReactComponent as FiletypeTtf } from "../../assets/Icons/outline/filetype-ttf.svg";
import { ReactComponent as FiletypeTxt } from "../../assets/Icons/outline/filetype-txt.svg";
import { ReactComponent as FiletypeWav } from "../../assets/Icons/outline/filetype-wav.svg";
import { ReactComponent as FiletypeWoff } from "../../assets/Icons/outline/filetype-woff.svg";
import { ReactComponent as FiletypeXls } from "../../assets/Icons/outline/filetype-xls.svg";
import { ReactComponent as FiletypeXlsx } from "../../assets/Icons/outline/filetype-xlsx.svg";
import { ReactComponent as FiletypeXml } from "../../assets/Icons/outline/filetype-xml.svg";
import { ReactComponent as FiletypeYml } from "../../assets/Icons/outline/filetype-yml.svg";
import { ReactComponent as Film } from "../../assets/Icons/outline/film.svg";
import { ReactComponent as FilterCircle } from "../../assets/Icons/outline/filter-circle.svg";
import { ReactComponent as FilterLeft } from "../../assets/Icons/outline/filter-left.svg";
import { ReactComponent as FilterRight } from "../../assets/Icons/outline/filter-right.svg";
import { ReactComponent as FilterSquare } from "../../assets/Icons/outline/filter-square.svg";
import { ReactComponent as Filter } from "../../assets/Icons/outline/filter.svg";
import { ReactComponent as Fingerprint } from "../../assets/Icons/outline/fingerprint.svg";
import { ReactComponent as Fire } from "../../assets/Icons/outline/fire.svg";
import { ReactComponent as Flag } from "../../assets/Icons/outline/flag.svg";
import { ReactComponent as Flower1 } from "../../assets/Icons/outline/flower1.svg";
import { ReactComponent as Flower2 } from "../../assets/Icons/outline/flower2.svg";
import { ReactComponent as Flower3 } from "../../assets/Icons/outline/flower3.svg";
import { ReactComponent as FolderCheck } from "../../assets/Icons/outline/folder-check.svg";
import { ReactComponent as FolderMinus } from "../../assets/Icons/outline/folder-minus.svg";
import { ReactComponent as FolderPlus } from "../../assets/Icons/outline/folder-plus.svg";
import { ReactComponent as FolderSymlink } from "../../assets/Icons/outline/folder-symlink.svg";
import { ReactComponent as FolderX } from "../../assets/Icons/outline/folder-x.svg";
import { ReactComponent as Folder } from "../../assets/Icons/outline/folder.svg";
import { ReactComponent as Folder2Open } from "../../assets/Icons/outline/folder2-open.svg";
import { ReactComponent as Folder2 } from "../../assets/Icons/outline/folder2.svg";
import { ReactComponent as Fonts } from "../../assets/Icons/outline/fonts.svg";
import { ReactComponent as Forward } from "../../assets/Icons/outline/forward.svg";
import { ReactComponent as Front } from "../../assets/Icons/outline/front.svg";
import { ReactComponent as FuelPumpDiesel } from "../../assets/Icons/outline/fuel-pump-diesel.svg";
import { ReactComponent as FuelPump } from "../../assets/Icons/outline/fuel-pump.svg";
import { ReactComponent as FullscreenExit } from "../../assets/Icons/outline/fullscreen-exit.svg";
import { ReactComponent as Fullscreen } from "../../assets/Icons/outline/fullscreen.svg";
import { ReactComponent as Funnel } from "../../assets/Icons/outline/funnel.svg";
import { ReactComponent as GearWideConnected } from "../../assets/Icons/outline/gear-wide-connected.svg";
import { ReactComponent as GearWide } from "../../assets/Icons/outline/gear-wide.svg";
import { ReactComponent as Gear } from "../../assets/Icons/outline/gear.svg";
import { ReactComponent as Gem } from "../../assets/Icons/outline/gem.svg";
import { ReactComponent as GenderAmbiguous } from "../../assets/Icons/outline/gender-ambiguous.svg";
import { ReactComponent as GenderFemale } from "../../assets/Icons/outline/gender-female.svg";
import { ReactComponent as GenderMale } from "../../assets/Icons/outline/gender-male.svg";
import { ReactComponent as GenderTrans } from "../../assets/Icons/outline/gender-trans.svg";
import { ReactComponent as GeoAlt } from "../../assets/Icons/outline/geo-alt.svg";
import { ReactComponent as Geo } from "../../assets/Icons/outline/geo.svg";
import { ReactComponent as Gift } from "../../assets/Icons/outline/gift.svg";
import { ReactComponent as Git } from "../../assets/Icons/outline/git.svg";
import { ReactComponent as Github } from "../../assets/Icons/outline/github.svg";
import { ReactComponent as GlobeAmericas } from "../../assets/Icons/outline/globe-americas.svg";
import { ReactComponent as GlobeAsiaAustralia } from "../../assets/Icons/outline/globe-asia-australia.svg";
import { ReactComponent as GlobeCentralSouthAsia } from "../../assets/Icons/outline/globe-central-south-asia.svg";
import { ReactComponent as GlobeEuropeAfrica } from "../../assets/Icons/outline/globe-europe-africa.svg";
import { ReactComponent as Globe } from "../../assets/Icons/outline/globe.svg";
import { ReactComponent as Globe2 } from "../../assets/Icons/outline/globe2.svg";
import { ReactComponent as GooglePlay } from "../../assets/Icons/outline/google-play.svg";
import { ReactComponent as Google } from "../../assets/Icons/outline/google.svg";
import { ReactComponent as GpuCard } from "../../assets/Icons/outline/gpu-card.svg";
import { ReactComponent as GraphDownArrow } from "../../assets/Icons/outline/graph-down-arrow.svg";
import { ReactComponent as GraphDown } from "../../assets/Icons/outline/graph-down.svg";
import { ReactComponent as GraphUpArrow } from "../../assets/Icons/outline/graph-up-arrow.svg";
import { ReactComponent as GraphUp } from "../../assets/Icons/outline/graph-up.svg";
import { ReactComponent as Grid1x2 } from "../../assets/Icons/outline/grid-1x2.svg";
import { ReactComponent as Grid3x2Gap } from "../../assets/Icons/outline/grid-3x2-gap.svg";
import { ReactComponent as Grid3x2 } from "../../assets/Icons/outline/grid-3x2.svg";
import { ReactComponent as Grid3x3Gap } from "../../assets/Icons/outline/grid-3x3-gap.svg";
import { ReactComponent as Grid3x3 } from "../../assets/Icons/outline/grid-3x3.svg";
import { ReactComponent as Grid } from "../../assets/Icons/outline/grid.svg";
import { ReactComponent as GripHorizontal } from "../../assets/Icons/outline/grip-horizontal.svg";
import { ReactComponent as GripVertical } from "../../assets/Icons/outline/grip-vertical.svg";
import { ReactComponent as HCircle } from "../../assets/Icons/outline/h-circle.svg";
import { ReactComponent as HSquare } from "../../assets/Icons/outline/h-square.svg";
import { ReactComponent as Hammer } from "../../assets/Icons/outline/hammer.svg";
import { ReactComponent as HandIndexThumb } from "../../assets/Icons/outline/hand-index-thumb.svg";
import { ReactComponent as HandIndex } from "../../assets/Icons/outline/hand-index.svg";
import { ReactComponent as HandThumbsDown } from "../../assets/Icons/outline/hand-thumbs-down.svg";
import { ReactComponent as HandThumbsUp } from "../../assets/Icons/outline/hand-thumbs-up.svg";
import { ReactComponent as Handbag } from "../../assets/Icons/outline/handbag.svg";
import { ReactComponent as Hash } from "../../assets/Icons/outline/hash.svg";
import { ReactComponent as HddNetwork } from "../../assets/Icons/outline/hdd-network.svg";
import { ReactComponent as HddRack } from "../../assets/Icons/outline/hdd-rack.svg";
import { ReactComponent as HddStack } from "../../assets/Icons/outline/hdd-stack.svg";
import { ReactComponent as Hdd } from "../../assets/Icons/outline/hdd.svg";
import { ReactComponent as Hdmi } from "../../assets/Icons/outline/hdmi.svg";
import { ReactComponent as Headphones } from "../../assets/Icons/outline/headphones.svg";
import { ReactComponent as HeadsetVr } from "../../assets/Icons/outline/headset-vr.svg";
import { ReactComponent as Headset } from "../../assets/Icons/outline/headset.svg";
import { ReactComponent as HeartArrow } from "../../assets/Icons/outline/heart-arrow.svg";
import { ReactComponent as HeartPulse } from "../../assets/Icons/outline/heart-pulse.svg";
import { ReactComponent as Heart } from "../../assets/Icons/outline/heart.svg";
import { ReactComponent as Heartbreak } from "../../assets/Icons/outline/heartbreak.svg";
import { ReactComponent as Hearts } from "../../assets/Icons/outline/hearts.svg";
import { ReactComponent as Heptagon } from "../../assets/Icons/outline/heptagon.svg";
import { ReactComponent as Hexagon } from "../../assets/Icons/outline/hexagon.svg";
import { ReactComponent as Hospital } from "../../assets/Icons/outline/hospital.svg";
import { ReactComponent as HourglassBottom } from "../../assets/Icons/outline/hourglass-bottom.svg";
import { ReactComponent as HourglassSplit } from "../../assets/Icons/outline/hourglass-split.svg";
import { ReactComponent as HourglassTop } from "../../assets/Icons/outline/hourglass-top.svg";
import { ReactComponent as Hourglass } from "../../assets/Icons/outline/hourglass.svg";
import { ReactComponent as HouseAdd } from "../../assets/Icons/outline/house-add.svg";
import { ReactComponent as HouseCheck } from "../../assets/Icons/outline/house-check.svg";
import { ReactComponent as HouseDash } from "../../assets/Icons/outline/house-dash.svg";
import { ReactComponent as HouseDoor } from "../../assets/Icons/outline/house-door.svg";
import { ReactComponent as HouseDown } from "../../assets/Icons/outline/house-down.svg";
import { ReactComponent as HouseExclamation } from "../../assets/Icons/outline/house-exclamation.svg";
import { ReactComponent as HouseGear } from "../../assets/Icons/outline/house-gear.svg";
import { ReactComponent as HouseHeart } from "../../assets/Icons/outline/house-heart.svg";
import { ReactComponent as HouseLock } from "../../assets/Icons/outline/house-lock.svg";
import { ReactComponent as HouseSlash } from "../../assets/Icons/outline/house-slash.svg";
import { ReactComponent as HouseUp } from "../../assets/Icons/outline/house-up.svg";
import { ReactComponent as HouseX } from "../../assets/Icons/outline/house-x.svg";
import { ReactComponent as House } from "../../assets/Icons/outline/house.svg";
import { ReactComponent as Houses } from "../../assets/Icons/outline/houses.svg";
import { ReactComponent as Hr } from "../../assets/Icons/outline/hr.svg";
import { ReactComponent as Hurricane } from "../../assets/Icons/outline/hurricane.svg";
import { ReactComponent as Hypnotize } from "../../assets/Icons/outline/hypnotize.svg";
import { ReactComponent as ImageAlt } from "../../assets/Icons/outline/image-alt.svg";
import { ReactComponent as Image } from "../../assets/Icons/outline/image.svg";
import { ReactComponent as Images } from "../../assets/Icons/outline/images.svg";
import { ReactComponent as Inbox } from "../../assets/Icons/outline/inbox.svg";
import { ReactComponent as Inboxes } from "../../assets/Icons/outline/inboxes.svg";
import { ReactComponent as Incognito } from "../../assets/Icons/outline/incognito.svg";
import { ReactComponent as Indent } from "../../assets/Icons/outline/indent.svg";
import { ReactComponent as Infinity } from "../../assets/Icons/outline/infinity.svg";
import { ReactComponent as InfoCircle } from "../../assets/Icons/outline/info-circle.svg";
import { ReactComponent as InfoLg } from "../../assets/Icons/outline/info-lg.svg";
import { ReactComponent as InfoSquare } from "../../assets/Icons/outline/info-square.svg";
import { ReactComponent as Info } from "../../assets/Icons/outline/info.svg";
import { ReactComponent as InputCursorText } from "../../assets/Icons/outline/input-cursor-text.svg";
import { ReactComponent as InputCursor } from "../../assets/Icons/outline/input-cursor.svg";
import { ReactComponent as Instagram } from "../../assets/Icons/outline/instagram.svg";
import { ReactComponent as Intersect } from "../../assets/Icons/outline/intersect.svg";
import { ReactComponent as JournalAlbum } from "../../assets/Icons/outline/journal-album.svg";
import { ReactComponent as JournalArrowDown } from "../../assets/Icons/outline/journal-arrow-down.svg";
import { ReactComponent as JournalArrowUp } from "../../assets/Icons/outline/journal-arrow-up.svg";
import { ReactComponent as JournalBookmark } from "../../assets/Icons/outline/journal-bookmark.svg";
import { ReactComponent as JournalCheck } from "../../assets/Icons/outline/journal-check.svg";
import { ReactComponent as JournalCode } from "../../assets/Icons/outline/journal-code.svg";
import { ReactComponent as JournalMedical } from "../../assets/Icons/outline/journal-medical.svg";
import { ReactComponent as JournalMinus } from "../../assets/Icons/outline/journal-minus.svg";
import { ReactComponent as JournalPlus } from "../../assets/Icons/outline/journal-plus.svg";
import { ReactComponent as JournalRichtext } from "../../assets/Icons/outline/journal-richtext.svg";
import { ReactComponent as JournalText } from "../../assets/Icons/outline/journal-text.svg";
import { ReactComponent as JournalX } from "../../assets/Icons/outline/journal-x.svg";
import { ReactComponent as Journal } from "../../assets/Icons/outline/journal.svg";
import { ReactComponent as Journals } from "../../assets/Icons/outline/journals.svg";
import { ReactComponent as Joystick } from "../../assets/Icons/outline/joystick.svg";
import { ReactComponent as JustifyLeft } from "../../assets/Icons/outline/justify-left.svg";
import { ReactComponent as JustifyRight } from "../../assets/Icons/outline/justify-right.svg";
import { ReactComponent as Justify } from "../../assets/Icons/outline/justify.svg";
import { ReactComponent as Kanban } from "../../assets/Icons/outline/kanban.svg";
import { ReactComponent as Key } from "../../assets/Icons/outline/key.svg";
import { ReactComponent as Keyboard } from "../../assets/Icons/outline/keyboard.svg";
import { ReactComponent as Ladder } from "../../assets/Icons/outline/ladder.svg";
import { ReactComponent as Lamp } from "../../assets/Icons/outline/lamp.svg";
import { ReactComponent as Laptop } from "../../assets/Icons/outline/laptop.svg";
import { ReactComponent as LayerBackward } from "../../assets/Icons/outline/layer-backward.svg";
import { ReactComponent as LayerForward } from "../../assets/Icons/outline/layer-forward.svg";
import { ReactComponent as Layers } from "../../assets/Icons/outline/layers.svg";
import { ReactComponent as LayoutSidebarInsetReverse } from "../../assets/Icons/outline/layout-sidebar-inset-reverse.svg";
import { ReactComponent as LayoutSidebarInset } from "../../assets/Icons/outline/layout-sidebar-inset.svg";
import { ReactComponent as LayoutSidebarReverse } from "../../assets/Icons/outline/layout-sidebar-reverse.svg";
import { ReactComponent as LayoutSidebar } from "../../assets/Icons/outline/layout-sidebar.svg";
import { ReactComponent as LayoutSplit } from "../../assets/Icons/outline/layout-split.svg";
import { ReactComponent as LayoutTextSidebarReverse } from "../../assets/Icons/outline/layout-text-sidebar-reverse.svg";
import { ReactComponent as LayoutTextSidebar } from "../../assets/Icons/outline/layout-text-sidebar.svg";
import { ReactComponent as LayoutTextWindowReverse } from "../../assets/Icons/outline/layout-text-window-reverse.svg";
import { ReactComponent as LayoutTextWindow } from "../../assets/Icons/outline/layout-text-window.svg";
import { ReactComponent as LayoutThreeColumns } from "../../assets/Icons/outline/layout-three-columns.svg";
import { ReactComponent as LayoutWtf } from "../../assets/Icons/outline/layout-wtf.svg";
import { ReactComponent as LifePreserver } from "../../assets/Icons/outline/life-preserver.svg";
import { ReactComponent as LightbulbOff } from "../../assets/Icons/outline/lightbulb-off.svg";
import { ReactComponent as Lightbulb } from "../../assets/Icons/outline/lightbulb.svg";
import { ReactComponent as LightningCharge } from "../../assets/Icons/outline/lightning-charge.svg";
import { ReactComponent as Lightning } from "../../assets/Icons/outline/lightning.svg";
import { ReactComponent as Line } from "../../assets/Icons/outline/line.svg";
import { ReactComponent as Link45deg } from "../../assets/Icons/outline/link-45deg.svg";
import { ReactComponent as Link } from "../../assets/Icons/outline/link.svg";
import { ReactComponent as Linkedin } from "../../assets/Icons/outline/linkedin.svg";
import { ReactComponent as ListCheck } from "../../assets/Icons/outline/list-check.svg";
import { ReactComponent as ListColumnsReverse } from "../../assets/Icons/outline/list-columns-reverse.svg";
import { ReactComponent as ListColumns } from "../../assets/Icons/outline/list-columns.svg";
import { ReactComponent as ListNested } from "../../assets/Icons/outline/list-nested.svg";
import { ReactComponent as ListOl } from "../../assets/Icons/outline/list-ol.svg";
import { ReactComponent as ListStars } from "../../assets/Icons/outline/list-stars.svg";
import { ReactComponent as ListTask } from "../../assets/Icons/outline/list-task.svg";
import { ReactComponent as ListUl } from "../../assets/Icons/outline/list-ul.svg";
import { ReactComponent as List } from "../../assets/Icons/outline/list.svg";
import { ReactComponent as Lock } from "../../assets/Icons/outline/lock.svg";
import { ReactComponent as Lungs } from "../../assets/Icons/outline/lungs.svg";
import { ReactComponent as Magic } from "../../assets/Icons/outline/magic.svg";
import { ReactComponent as Magnet } from "../../assets/Icons/outline/magnet.svg";
import { ReactComponent as Mailbox } from "../../assets/Icons/outline/mailbox.svg";
import { ReactComponent as Mailbox2 } from "../../assets/Icons/outline/mailbox2.svg";
import { ReactComponent as Map } from "../../assets/Icons/outline/map.svg";
import { ReactComponent as Markdown } from "../../assets/Icons/outline/markdown.svg";
import { ReactComponent as Mask } from "../../assets/Icons/outline/mask.svg";
import { ReactComponent as Mastodon } from "../../assets/Icons/outline/mastodon.svg";
import { ReactComponent as Medium } from "../../assets/Icons/outline/medium.svg";
import { ReactComponent as Megaphone } from "../../assets/Icons/outline/megaphone.svg";
import { ReactComponent as Memory } from "../../assets/Icons/outline/memory.svg";
import { ReactComponent as MenuApp } from "../../assets/Icons/outline/menu-app.svg";
import { ReactComponent as MenuButtonWide } from "../../assets/Icons/outline/menu-button-wide.svg";
import { ReactComponent as MenuButton } from "../../assets/Icons/outline/menu-button.svg";
import { ReactComponent as MenuDown } from "../../assets/Icons/outline/menu-down.svg";
import { ReactComponent as MenuUp } from "../../assets/Icons/outline/menu-up.svg";
import { ReactComponent as Messenger } from "../../assets/Icons/outline/messenger.svg";
import { ReactComponent as Meta } from "../../assets/Icons/outline/meta.svg";
import { ReactComponent as MicMute } from "../../assets/Icons/outline/mic-mute.svg";
import { ReactComponent as Mic } from "../../assets/Icons/outline/mic.svg";
import { ReactComponent as MicrosoftTeams } from "../../assets/Icons/outline/microsoft-teams.svg";
import { ReactComponent as Microsoft } from "../../assets/Icons/outline/microsoft.svg";
import { ReactComponent as MinecartLoaded } from "../../assets/Icons/outline/minecart-loaded.svg";
import { ReactComponent as Minecart } from "../../assets/Icons/outline/minecart.svg";
import { ReactComponent as Modem } from "../../assets/Icons/outline/modem.svg";
import { ReactComponent as Moisture } from "../../assets/Icons/outline/moisture.svg";
import { ReactComponent as MoonStars } from "../../assets/Icons/outline/moon-stars.svg";
import { ReactComponent as Moon } from "../../assets/Icons/outline/moon.svg";
import { ReactComponent as Mortarboard } from "../../assets/Icons/outline/mortarboard.svg";
import { ReactComponent as Motherboard } from "../../assets/Icons/outline/motherboard.svg";
import { ReactComponent as Mouse } from "../../assets/Icons/outline/mouse.svg";
import { ReactComponent as Mouse2 } from "../../assets/Icons/outline/mouse2.svg";
import { ReactComponent as Mouse3 } from "../../assets/Icons/outline/mouse3.svg";
import { ReactComponent as MusicNoteBeamed } from "../../assets/Icons/outline/music-note-beamed.svg";
import { ReactComponent as MusicNoteList } from "../../assets/Icons/outline/music-note-list.svg";
import { ReactComponent as MusicNote } from "../../assets/Icons/outline/music-note.svg";
import { ReactComponent as MusicPlayer } from "../../assets/Icons/outline/music-player.svg";
import { ReactComponent as Newspaper } from "../../assets/Icons/outline/newspaper.svg";
import { ReactComponent as NintendoSwitch } from "../../assets/Icons/outline/nintendo-switch.svg";
import { ReactComponent as NodeMinus } from "../../assets/Icons/outline/node-minus.svg";
import { ReactComponent as NodePlus } from "../../assets/Icons/outline/node-plus.svg";
import { ReactComponent as Nut } from "../../assets/Icons/outline/nut.svg";
import { ReactComponent as Nvidia } from "../../assets/Icons/outline/nvidia.svg";
import { ReactComponent as Octagon } from "../../assets/Icons/outline/octagon.svg";
import { ReactComponent as OpticalAudio } from "../../assets/Icons/outline/optical-audio.svg";
import { ReactComponent as Option } from "../../assets/Icons/outline/option.svg";
import { ReactComponent as Outlet } from "../../assets/Icons/outline/outlet.svg";
import { ReactComponent as PCircle } from "../../assets/Icons/outline/p-circle.svg";
import { ReactComponent as PSquare } from "../../assets/Icons/outline/p-square.svg";
import { ReactComponent as PaintBucket } from "../../assets/Icons/outline/paint-bucket.svg";
import { ReactComponent as Palette } from "../../assets/Icons/outline/palette.svg";
import { ReactComponent as Palette2 } from "../../assets/Icons/outline/palette2.svg";
import { ReactComponent as Paperclip } from "../../assets/Icons/outline/paperclip.svg";
import { ReactComponent as Paragraph } from "../../assets/Icons/outline/paragraph.svg";
import { ReactComponent as Pass } from "../../assets/Icons/outline/pass.svg";
import { ReactComponent as PatchCheck } from "../../assets/Icons/outline/patch-check.svg";
import { ReactComponent as PatchExclamation } from "../../assets/Icons/outline/patch-exclamation.svg";
import { ReactComponent as PatchMinus } from "../../assets/Icons/outline/patch-minus.svg";
import { ReactComponent as PatchPlus } from "../../assets/Icons/outline/patch-plus.svg";
import { ReactComponent as PatchQuestion } from "../../assets/Icons/outline/patch-question.svg";
import { ReactComponent as PauseBtn } from "../../assets/Icons/outline/pause-btn.svg";
import { ReactComponent as PauseCircle } from "../../assets/Icons/outline/pause-circle.svg";
import { ReactComponent as Pause } from "../../assets/Icons/outline/pause.svg";
import { ReactComponent as Paypal } from "../../assets/Icons/outline/paypal.svg";
import { ReactComponent as PcDisplayHorizontal } from "../../assets/Icons/outline/pc-display-horizontal.svg";
import { ReactComponent as PcDisplay } from "../../assets/Icons/outline/pc-display.svg";
import { ReactComponent as PcHorizontal } from "../../assets/Icons/outline/pc-horizontal.svg";
import { ReactComponent as Pc } from "../../assets/Icons/outline/pc.svg";
import { ReactComponent as PciCard } from "../../assets/Icons/outline/pci-card.svg";
import { ReactComponent as Peace } from "../../assets/Icons/outline/peace.svg";
import { ReactComponent as Pen } from "../../assets/Icons/outline/pen.svg";
import { ReactComponent as PencilSquare } from "../../assets/Icons/outline/pencil-square.svg";
import { ReactComponent as Pencil } from "../../assets/Icons/outline/pencil.svg";
import { ReactComponent as Pentagon } from "../../assets/Icons/outline/pentagon.svg";
import { ReactComponent as People } from "../../assets/Icons/outline/people.svg";
import { ReactComponent as Percent } from "../../assets/Icons/outline/percent.svg";
import { ReactComponent as PersonAdd } from "../../assets/Icons/outline/person-add.svg";
import { ReactComponent as PersonBadge } from "../../assets/Icons/outline/person-badge.svg";
import { ReactComponent as PersonBoundingBox } from "../../assets/Icons/outline/person-bounding-box.svg";
import { ReactComponent as PersonCheck } from "../../assets/Icons/outline/person-check.svg";
import { ReactComponent as PersonCircle } from "../../assets/Icons/outline/person-circle.svg";
import { ReactComponent as PersonDash } from "../../assets/Icons/outline/person-dash.svg";
import { ReactComponent as PersonDown } from "../../assets/Icons/outline/person-down.svg";
import { ReactComponent as PersonExclamation } from "../../assets/Icons/outline/person-exclamation.svg";
import { ReactComponent as PersonGear } from "../../assets/Icons/outline/person-gear.svg";
import { ReactComponent as PersonHeart } from "../../assets/Icons/outline/person-heart.svg";
import { ReactComponent as PersonHearts } from "../../assets/Icons/outline/person-hearts.svg";
import { ReactComponent as PersonLock } from "../../assets/Icons/outline/person-lock.svg";
import { ReactComponent as PersonPlus } from "../../assets/Icons/outline/person-plus.svg";
import { ReactComponent as PersonRolodex } from "../../assets/Icons/outline/person-rolodex.svg";
import { ReactComponent as PersonSlash } from "../../assets/Icons/outline/person-slash.svg";
import { ReactComponent as PersonSquare } from "../../assets/Icons/outline/person-square.svg";
import { ReactComponent as PersonUp } from "../../assets/Icons/outline/person-up.svg";
import { ReactComponent as PersonVcard } from "../../assets/Icons/outline/person-vcard.svg";
import { ReactComponent as PersonVideo } from "../../assets/Icons/outline/person-video.svg";
import { ReactComponent as PersonVideo2 } from "../../assets/Icons/outline/person-video2.svg";
import { ReactComponent as PersonVideo3 } from "../../assets/Icons/outline/person-video3.svg";
import { ReactComponent as PersonWorkspace } from "../../assets/Icons/outline/person-workspace.svg";
import { ReactComponent as PersonX } from "../../assets/Icons/outline/person-x.svg";
import { ReactComponent as Person } from "../../assets/Icons/outline/person.svg";
import { ReactComponent as PhoneFlip } from "../../assets/Icons/outline/phone-flip.svg";
import { ReactComponent as PhoneLandscape } from "../../assets/Icons/outline/phone-landscape.svg";
import { ReactComponent as PhoneVibrate } from "../../assets/Icons/outline/phone-vibrate.svg";
import { ReactComponent as Phone } from "../../assets/Icons/outline/phone.svg";
import { ReactComponent as PieChart } from "../../assets/Icons/outline/pie-chart.svg";
import { ReactComponent as PiggyBank } from "../../assets/Icons/outline/piggy-bank.svg";
import { ReactComponent as PinAngle } from "../../assets/Icons/outline/pin-angle.svg";
import { ReactComponent as PinMap } from "../../assets/Icons/outline/pin-map.svg";
import { ReactComponent as Pin } from "../../assets/Icons/outline/pin.svg";
import { ReactComponent as Pinterest } from "../../assets/Icons/outline/pinterest.svg";
import { ReactComponent as Pip } from "../../assets/Icons/outline/pip.svg";
import { ReactComponent as PlayBtn } from "../../assets/Icons/outline/play-btn.svg";
import { ReactComponent as PlayCircle } from "../../assets/Icons/outline/play-circle.svg";
import { ReactComponent as Play } from "../../assets/Icons/outline/play.svg";
import { ReactComponent as Playstation } from "../../assets/Icons/outline/playstation.svg";
import { ReactComponent as Plug } from "../../assets/Icons/outline/plug.svg";
import { ReactComponent as Plugin } from "../../assets/Icons/outline/plugin.svg";
import { ReactComponent as PlusCircleDotted } from "../../assets/Icons/outline/plus-circle-dotted.svg";
import { ReactComponent as PlusCircle } from "../../assets/Icons/outline/plus-circle.svg";
import { ReactComponent as PlusLg } from "../../assets/Icons/outline/plus-lg.svg";
import { ReactComponent as PlusSlashMinus } from "../../assets/Icons/outline/plus-slash-minus.svg";
import { ReactComponent as PlusSquareDotted } from "../../assets/Icons/outline/plus-square-dotted.svg";
import { ReactComponent as PlusSquare } from "../../assets/Icons/outline/plus-square.svg";
import { ReactComponent as Plus } from "../../assets/Icons/outline/plus.svg";
import { ReactComponent as PostageHeart } from "../../assets/Icons/outline/postage-heart.svg";
import { ReactComponent as Postage } from "../../assets/Icons/outline/postage.svg";
import { ReactComponent as PostcardHeart } from "../../assets/Icons/outline/postcard-heart.svg";
import { ReactComponent as Postcard } from "../../assets/Icons/outline/postcard.svg";
import { ReactComponent as Power } from "../../assets/Icons/outline/power.svg";
import { ReactComponent as Prescription } from "../../assets/Icons/outline/prescription.svg";
import { ReactComponent as Prescription2 } from "../../assets/Icons/outline/prescription2.svg";
import { ReactComponent as Printer } from "../../assets/Icons/outline/printer.svg";
import { ReactComponent as Projector } from "../../assets/Icons/outline/projector.svg";
import { ReactComponent as Puzzle } from "../../assets/Icons/outline/puzzle.svg";
import { ReactComponent as QrCodeScan } from "../../assets/Icons/outline/qr-code-scan.svg";
import { ReactComponent as QrCode } from "../../assets/Icons/outline/qr-code.svg";
import { ReactComponent as QuestionCircle } from "../../assets/Icons/outline/question-circle.svg";
import { ReactComponent as QuestionDiamond } from "../../assets/Icons/outline/question-diamond.svg";
import { ReactComponent as QuestionLg } from "../../assets/Icons/outline/question-lg.svg";
import { ReactComponent as QuestionOctagon } from "../../assets/Icons/outline/question-octagon.svg";
import { ReactComponent as QuestionSquare } from "../../assets/Icons/outline/question-square.svg";
import { ReactComponent as Question } from "../../assets/Icons/outline/question.svg";
import { ReactComponent as Quora } from "../../assets/Icons/outline/quora.svg";
import { ReactComponent as Quote } from "../../assets/Icons/outline/quote.svg";
import { ReactComponent as RCircle } from "../../assets/Icons/outline/r-circle.svg";
import { ReactComponent as RSquare } from "../../assets/Icons/outline/r-square.svg";
import { ReactComponent as Radioactive } from "../../assets/Icons/outline/radioactive.svg";
import { ReactComponent as Rainbow } from "../../assets/Icons/outline/rainbow.svg";
import { ReactComponent as ReceiptCutoff } from "../../assets/Icons/outline/receipt-cutoff.svg";
import { ReactComponent as Receipt } from "../../assets/Icons/outline/receipt.svg";
import { ReactComponent as Reception0 } from "../../assets/Icons/outline/reception-0.svg";
import { ReactComponent as Reception1 } from "../../assets/Icons/outline/reception-1.svg";
import { ReactComponent as Reception2 } from "../../assets/Icons/outline/reception-2.svg";
import { ReactComponent as Reception3 } from "../../assets/Icons/outline/reception-3.svg";
import { ReactComponent as Reception4 } from "../../assets/Icons/outline/reception-4.svg";
import { ReactComponent as RecordBtn } from "../../assets/Icons/outline/record-btn.svg";
import { ReactComponent as RecordCircle } from "../../assets/Icons/outline/record-circle.svg";
import { ReactComponent as Record } from "../../assets/Icons/outline/record.svg";
import { ReactComponent as Record2 } from "../../assets/Icons/outline/record2.svg";
import { ReactComponent as Recycle } from "../../assets/Icons/outline/recycle.svg";
import { ReactComponent as Reddit } from "../../assets/Icons/outline/reddit.svg";
import { ReactComponent as Regex } from "../../assets/Icons/outline/regex.svg";
import { ReactComponent as Repeat1 } from "../../assets/Icons/outline/repeat-1.svg";
import { ReactComponent as Repeat } from "../../assets/Icons/outline/repeat.svg";
import { ReactComponent as ReplyAll } from "../../assets/Icons/outline/reply-all.svg";
import { ReactComponent as Reply } from "../../assets/Icons/outline/reply.svg";
import { ReactComponent as RewindBtn } from "../../assets/Icons/outline/rewind-btn.svg";
import { ReactComponent as RewindCircle } from "../../assets/Icons/outline/rewind-circle.svg";
import { ReactComponent as Rewind } from "../../assets/Icons/outline/rewind.svg";
import { ReactComponent as Robot } from "../../assets/Icons/outline/robot.svg";
import { ReactComponent as RocketTakeoff } from "../../assets/Icons/outline/rocket-takeoff.svg";
import { ReactComponent as Rocket } from "../../assets/Icons/outline/rocket.svg";
import { ReactComponent as Router } from "../../assets/Icons/outline/router.svg";
import { ReactComponent as Rss } from "../../assets/Icons/outline/rss.svg";
import { ReactComponent as Rulers } from "../../assets/Icons/outline/rulers.svg";
import { ReactComponent as Safe } from "../../assets/Icons/outline/safe.svg";
import { ReactComponent as Safe2 } from "../../assets/Icons/outline/safe2.svg";
import { ReactComponent as Save } from "../../assets/Icons/outline/save.svg";
import { ReactComponent as Save2 } from "../../assets/Icons/outline/save2.svg";
import { ReactComponent as Scissors } from "../../assets/Icons/outline/scissors.svg";
import { ReactComponent as Scooter } from "../../assets/Icons/outline/scooter.svg";
import { ReactComponent as Screwdriver } from "../../assets/Icons/outline/screwdriver.svg";
import { ReactComponent as SdCard } from "../../assets/Icons/outline/sd-card.svg";
import { ReactComponent as SearchHeart } from "../../assets/Icons/outline/search-heart.svg";
import { ReactComponent as Search } from "../../assets/Icons/outline/search.svg";
import { ReactComponent as SegmentedNav } from "../../assets/Icons/outline/segmented-nav.svg";
import { ReactComponent as SendCheck } from "../../assets/Icons/outline/send-check.svg";
import { ReactComponent as SendDash } from "../../assets/Icons/outline/send-dash.svg";
import { ReactComponent as SendExclamation } from "../../assets/Icons/outline/send-exclamation.svg";
import { ReactComponent as SendPlus } from "../../assets/Icons/outline/send-plus.svg";
import { ReactComponent as SendSlash } from "../../assets/Icons/outline/send-slash.svg";
import { ReactComponent as SendX } from "../../assets/Icons/outline/send-x.svg";
import { ReactComponent as Send } from "../../assets/Icons/outline/send.svg";
import { ReactComponent as Server } from "../../assets/Icons/outline/server.svg";
import { ReactComponent as Share } from "../../assets/Icons/outline/share.svg";
import { ReactComponent as ShieldCheck } from "../../assets/Icons/outline/shield-check.svg";
import { ReactComponent as ShieldExclamation } from "../../assets/Icons/outline/shield-exclamation.svg";
import { ReactComponent as ShieldLock } from "../../assets/Icons/outline/shield-lock.svg";
import { ReactComponent as ShieldMinus } from "../../assets/Icons/outline/shield-minus.svg";
import { ReactComponent as ShieldPlus } from "../../assets/Icons/outline/shield-plus.svg";
import { ReactComponent as ShieldShaded } from "../../assets/Icons/outline/shield-shaded.svg";
import { ReactComponent as ShieldSlash } from "../../assets/Icons/outline/shield-slash.svg";
import { ReactComponent as ShieldX } from "../../assets/Icons/outline/shield-x.svg";
import { ReactComponent as Shield } from "../../assets/Icons/outline/shield.svg";
import { ReactComponent as Shift } from "../../assets/Icons/outline/shift.svg";
import { ReactComponent as ShopWindow } from "../../assets/Icons/outline/shop-window.svg";
import { ReactComponent as Shop } from "../../assets/Icons/outline/shop.svg";
import { ReactComponent as Shuffle } from "../../assets/Icons/outline/shuffle.svg";
import { ReactComponent as SignDeadEnd } from "../../assets/Icons/outline/sign-dead-end.svg";
import { ReactComponent as SignDoNotEnter } from "../../assets/Icons/outline/sign-do-not-enter.svg";
import { ReactComponent as SignIntersectionSide } from "../../assets/Icons/outline/sign-intersection-side.svg";
import { ReactComponent as SignIntersectionT } from "../../assets/Icons/outline/sign-intersection-t.svg";
import { ReactComponent as SignIntersectionY } from "../../assets/Icons/outline/sign-intersection-y.svg";
import { ReactComponent as SignIntersection } from "../../assets/Icons/outline/sign-intersection.svg";
import { ReactComponent as SignMergeLeft } from "../../assets/Icons/outline/sign-merge-left.svg";
import { ReactComponent as SignMergeRight } from "../../assets/Icons/outline/sign-merge-right.svg";
import { ReactComponent as SignNoLeftTurn } from "../../assets/Icons/outline/sign-no-left-turn.svg";
import { ReactComponent as SignNoParking } from "../../assets/Icons/outline/sign-no-parking.svg";
import { ReactComponent as SignNoRightTurn } from "../../assets/Icons/outline/sign-no-right-turn.svg";
import { ReactComponent as SignRailroad } from "../../assets/Icons/outline/sign-railroad.svg";
import { ReactComponent as SignStopLights } from "../../assets/Icons/outline/sign-stop-lights.svg";
import { ReactComponent as SignStop } from "../../assets/Icons/outline/sign-stop.svg";
import { ReactComponent as SignTurnLeft } from "../../assets/Icons/outline/sign-turn-left.svg";
import { ReactComponent as SignTurnRight } from "../../assets/Icons/outline/sign-turn-right.svg";
import { ReactComponent as SignTurnSlightLeft } from "../../assets/Icons/outline/sign-turn-slight-left.svg";
import { ReactComponent as SignTurnSlightRight } from "../../assets/Icons/outline/sign-turn-slight-right.svg";
import { ReactComponent as SignYield } from "../../assets/Icons/outline/sign-yield.svg";
import { ReactComponent as Signal } from "../../assets/Icons/outline/signal.svg";
import { ReactComponent as Signpost2 } from "../../assets/Icons/outline/signpost-2.svg";
import { ReactComponent as SignpostSplit } from "../../assets/Icons/outline/signpost-split.svg";
import { ReactComponent as Signpost } from "../../assets/Icons/outline/signpost.svg";
import { ReactComponent as Sim } from "../../assets/Icons/outline/sim.svg";
import { ReactComponent as SinaWeibo } from "../../assets/Icons/outline/sina-weibo.svg";
import { ReactComponent as SkipBackwardBtn } from "../../assets/Icons/outline/skip-backward-btn.svg";
import { ReactComponent as SkipBackwardCircle } from "../../assets/Icons/outline/skip-backward-circle.svg";
import { ReactComponent as SkipBackward } from "../../assets/Icons/outline/skip-backward.svg";
import { ReactComponent as SkipEndBtn } from "../../assets/Icons/outline/skip-end-btn.svg";
import { ReactComponent as SkipEndCircle } from "../../assets/Icons/outline/skip-end-circle.svg";
import { ReactComponent as SkipEnd } from "../../assets/Icons/outline/skip-end.svg";
import { ReactComponent as SkipForwardBtn } from "../../assets/Icons/outline/skip-forward-btn.svg";
import { ReactComponent as SkipForwardCircle } from "../../assets/Icons/outline/skip-forward-circle.svg";
import { ReactComponent as SkipForward } from "../../assets/Icons/outline/skip-forward.svg";
import { ReactComponent as SkipStartBtn } from "../../assets/Icons/outline/skip-start-btn.svg";
import { ReactComponent as SkipStartCircle } from "../../assets/Icons/outline/skip-start-circle.svg";
import { ReactComponent as SkipStart } from "../../assets/Icons/outline/skip-start.svg";
import { ReactComponent as Skype } from "../../assets/Icons/outline/skype.svg";
import { ReactComponent as Slack } from "../../assets/Icons/outline/slack.svg";
import { ReactComponent as SlashCircle } from "../../assets/Icons/outline/slash-circle.svg";
import { ReactComponent as SlashLg } from "../../assets/Icons/outline/slash-lg.svg";
import { ReactComponent as SlashSquare } from "../../assets/Icons/outline/slash-square.svg";
import { ReactComponent as Slash } from "../../assets/Icons/outline/slash.svg";
import { ReactComponent as Sliders } from "../../assets/Icons/outline/sliders.svg";
import { ReactComponent as Sliders2Vertical } from "../../assets/Icons/outline/sliders2-vertical.svg";
import { ReactComponent as Sliders2 } from "../../assets/Icons/outline/sliders2.svg";
import { ReactComponent as Smartwatch } from "../../assets/Icons/outline/smartwatch.svg";
import { ReactComponent as Snapchat } from "../../assets/Icons/outline/snapchat.svg";
import { ReactComponent as Snow } from "../../assets/Icons/outline/snow.svg";
import { ReactComponent as Snow2 } from "../../assets/Icons/outline/snow2.svg";
import { ReactComponent as Snow3 } from "../../assets/Icons/outline/snow3.svg";
import { ReactComponent as SortAlphaDownAlt } from "../../assets/Icons/outline/sort-alpha-down-alt.svg";
import { ReactComponent as SortAlphaDown } from "../../assets/Icons/outline/sort-alpha-down.svg";
import { ReactComponent as SortAlphaUpAlt } from "../../assets/Icons/outline/sort-alpha-up-alt.svg";
import { ReactComponent as SortAlphaUp } from "../../assets/Icons/outline/sort-alpha-up.svg";
import { ReactComponent as SortDownAlt } from "../../assets/Icons/outline/sort-down-alt.svg";
import { ReactComponent as SortDown } from "../../assets/Icons/outline/sort-down.svg";
import { ReactComponent as SortNumericDownAlt } from "../../assets/Icons/outline/sort-numeric-down-alt.svg";
import { ReactComponent as SortNumericDown } from "../../assets/Icons/outline/sort-numeric-down.svg";
import { ReactComponent as SortNumericUpAlt } from "../../assets/Icons/outline/sort-numeric-up-alt.svg";
import { ReactComponent as SortNumericUp } from "../../assets/Icons/outline/sort-numeric-up.svg";
import { ReactComponent as SortUpAlt } from "../../assets/Icons/outline/sort-up-alt.svg";
import { ReactComponent as SortUp } from "../../assets/Icons/outline/sort-up.svg";
import { ReactComponent as Soundwave } from "../../assets/Icons/outline/soundwave.svg";
import { ReactComponent as Speaker } from "../../assets/Icons/outline/speaker.svg";
import { ReactComponent as Speedometer } from "../../assets/Icons/outline/speedometer.svg";
import { ReactComponent as Speedometer2 } from "../../assets/Icons/outline/speedometer2.svg";
import { ReactComponent as Spellcheck } from "../../assets/Icons/outline/spellcheck.svg";
import { ReactComponent as Spotify } from "../../assets/Icons/outline/spotify.svg";
import { ReactComponent as Square } from "../../assets/Icons/outline/square.svg";
import { ReactComponent as StackOverflow } from "../../assets/Icons/outline/stack-overflow.svg";
import { ReactComponent as Stack } from "../../assets/Icons/outline/stack.svg";
import { ReactComponent as Star } from "../../assets/Icons/outline/star.svg";
import { ReactComponent as Stars } from "../../assets/Icons/outline/stars.svg";
import { ReactComponent as Steam } from "../../assets/Icons/outline/steam.svg";
import { ReactComponent as Stickies } from "../../assets/Icons/outline/stickies.svg";
import { ReactComponent as Sticky } from "../../assets/Icons/outline/sticky.svg";
import { ReactComponent as StopBtn } from "../../assets/Icons/outline/stop-btn.svg";
import { ReactComponent as StopCircle } from "../../assets/Icons/outline/stop-circle.svg";
import { ReactComponent as Stop } from "../../assets/Icons/outline/stop.svg";
import { ReactComponent as Stoplights } from "../../assets/Icons/outline/stoplights.svg";
import { ReactComponent as Stopwatch } from "../../assets/Icons/outline/stopwatch.svg";
import { ReactComponent as Strava } from "../../assets/Icons/outline/strava.svg";
import { ReactComponent as Stripe } from "../../assets/Icons/outline/stripe.svg";
import { ReactComponent as Subscript } from "../../assets/Icons/outline/subscript.svg";
import { ReactComponent as Subtract } from "../../assets/Icons/outline/subtract.svg";
import { ReactComponent as SuitClub } from "../../assets/Icons/outline/suit-club.svg";
import { ReactComponent as SuitDiamond } from "../../assets/Icons/outline/suit-diamond.svg";
import { ReactComponent as SuitHeart } from "../../assets/Icons/outline/suit-heart.svg";
import { ReactComponent as SuitSpade } from "../../assets/Icons/outline/suit-spade.svg";
import { ReactComponent as Sun } from "../../assets/Icons/outline/sun.svg";
import { ReactComponent as Sunglasses } from "../../assets/Icons/outline/sunglasses.svg";
import { ReactComponent as Sunrise } from "../../assets/Icons/outline/sunrise.svg";
import { ReactComponent as Sunset } from "../../assets/Icons/outline/sunset.svg";
import { ReactComponent as Superscript } from "../../assets/Icons/outline/superscript.svg";
import { ReactComponent as SymmetryHorizontal } from "../../assets/Icons/outline/symmetry-horizontal.svg";
import { ReactComponent as SymmetryVertical } from "../../assets/Icons/outline/symmetry-vertical.svg";
import { ReactComponent as Table } from "../../assets/Icons/outline/table.svg";
import { ReactComponent as TabletLandscape } from "../../assets/Icons/outline/tablet-landscape.svg";
import { ReactComponent as Tablet } from "../../assets/Icons/outline/tablet.svg";
import { ReactComponent as Tag } from "../../assets/Icons/outline/tag.svg";
import { ReactComponent as Tags } from "../../assets/Icons/outline/tags.svg";
import { ReactComponent as TaxiFront } from "../../assets/Icons/outline/taxi-front.svg";
import { ReactComponent as Telegram } from "../../assets/Icons/outline/telegram.svg";
import { ReactComponent as TelephoneForward } from "../../assets/Icons/outline/telephone-forward.svg";
import { ReactComponent as TelephoneInbound } from "../../assets/Icons/outline/telephone-inbound.svg";
import { ReactComponent as TelephoneMinus } from "../../assets/Icons/outline/telephone-minus.svg";
import { ReactComponent as TelephoneOutbound } from "../../assets/Icons/outline/telephone-outbound.svg";
import { ReactComponent as TelephonePlus } from "../../assets/Icons/outline/telephone-plus.svg";
import { ReactComponent as TelephoneX } from "../../assets/Icons/outline/telephone-x.svg";
import { ReactComponent as Telephone } from "../../assets/Icons/outline/telephone.svg";
import { ReactComponent as TencentQq } from "../../assets/Icons/outline/tencent-qq.svg";
import { ReactComponent as TerminalDash } from "../../assets/Icons/outline/terminal-dash.svg";
import { ReactComponent as TerminalPlus } from "../../assets/Icons/outline/terminal-plus.svg";
import { ReactComponent as TerminalSplit } from "../../assets/Icons/outline/terminal-split.svg";
import { ReactComponent as TerminalX } from "../../assets/Icons/outline/terminal-x.svg";
import { ReactComponent as Terminal } from "../../assets/Icons/outline/terminal.svg";
import { ReactComponent as TextCenter } from "../../assets/Icons/outline/text-center.svg";
import { ReactComponent as TextIndentLeft } from "../../assets/Icons/outline/text-indent-left.svg";
import { ReactComponent as TextIndentRight } from "../../assets/Icons/outline/text-indent-right.svg";
import { ReactComponent as TextLeft } from "../../assets/Icons/outline/text-left.svg";
import { ReactComponent as TextParagraph } from "../../assets/Icons/outline/text-paragraph.svg";
import { ReactComponent as TextRight } from "../../assets/Icons/outline/text-right.svg";
import { ReactComponent as TextWrap } from "../../assets/Icons/outline/text-wrap.svg";
import { ReactComponent as TextareaResize } from "../../assets/Icons/outline/textarea-resize.svg";
import { ReactComponent as TextareaT } from "../../assets/Icons/outline/textarea-t.svg";
import { ReactComponent as Textarea } from "../../assets/Icons/outline/textarea.svg";
import { ReactComponent as ThermometerHigh } from "../../assets/Icons/outline/thermometer-high.svg";
import { ReactComponent as ThermometerLow } from "../../assets/Icons/outline/thermometer-low.svg";
import { ReactComponent as ThermometerSnow } from "../../assets/Icons/outline/thermometer-snow.svg";
import { ReactComponent as ThermometerSun } from "../../assets/Icons/outline/thermometer-sun.svg";
import { ReactComponent as Thermometer } from "../../assets/Icons/outline/thermometer.svg";
import { ReactComponent as ThreeDotsVertical } from "../../assets/Icons/outline/three-dots-vertical.svg";
import { ReactComponent as ThreeDots } from "../../assets/Icons/outline/three-dots.svg";
import { ReactComponent as Thunderbolt } from "../../assets/Icons/outline/thunderbolt.svg";
import { ReactComponent as TicketDetailed } from "../../assets/Icons/outline/ticket-detailed.svg";
import { ReactComponent as TicketPerforated } from "../../assets/Icons/outline/ticket-perforated.svg";
import { ReactComponent as Ticket } from "../../assets/Icons/outline/ticket.svg";
import { ReactComponent as Tiktok } from "../../assets/Icons/outline/tiktok.svg";
import { ReactComponent as ToggleOff } from "../../assets/Icons/outline/toggle-off.svg";
import { ReactComponent as ToggleOn } from "../../assets/Icons/outline/toggle-on.svg";
import { ReactComponent as Toggle2Off } from "../../assets/Icons/outline/toggle2-off.svg";
import { ReactComponent as Toggle2On } from "../../assets/Icons/outline/toggle2-on.svg";
import { ReactComponent as Toggles } from "../../assets/Icons/outline/toggles.svg";
import { ReactComponent as Toggles2 } from "../../assets/Icons/outline/toggles2.svg";
import { ReactComponent as Tools } from "../../assets/Icons/outline/tools.svg";
import { ReactComponent as Tornado } from "../../assets/Icons/outline/tornado.svg";
import { ReactComponent as TrainFreightFront } from "../../assets/Icons/outline/train-freight-front.svg";
import { ReactComponent as TrainFront } from "../../assets/Icons/outline/train-front.svg";
import { ReactComponent as TrainLightrailFront } from "../../assets/Icons/outline/train-lightrail-front.svg";
import { ReactComponent as Translate } from "../../assets/Icons/outline/translate.svg";
import { ReactComponent as Trash } from "../../assets/Icons/outline/trash.svg";
import { ReactComponent as Trash2 } from "../../assets/Icons/outline/trash2.svg";
import { ReactComponent as Trash3 } from "../../assets/Icons/outline/trash3.svg";
import { ReactComponent as Tree } from "../../assets/Icons/outline/tree.svg";
import { ReactComponent as Trello } from "../../assets/Icons/outline/trello.svg";
import { ReactComponent as Triangle } from "../../assets/Icons/outline/triangle.svg";
import { ReactComponent as Trophy } from "../../assets/Icons/outline/trophy.svg";
import { ReactComponent as TropicalStorm } from "../../assets/Icons/outline/tropical-storm.svg";
import { ReactComponent as TruckFlatbed } from "../../assets/Icons/outline/truck-flatbed.svg";
import { ReactComponent as TruckFront } from "../../assets/Icons/outline/truck-front.svg";
import { ReactComponent as Truck } from "../../assets/Icons/outline/truck.svg";
import { ReactComponent as Tsunami } from "../../assets/Icons/outline/tsunami.svg";
import { ReactComponent as Tv } from "../../assets/Icons/outline/tv.svg";
import { ReactComponent as Twitch } from "../../assets/Icons/outline/twitch.svg";
import { ReactComponent as Twitter } from "../../assets/Icons/outline/twitter.svg";
import { ReactComponent as TypeBold } from "../../assets/Icons/outline/type-bold.svg";
import { ReactComponent as TypeH1 } from "../../assets/Icons/outline/type-h1.svg";
import { ReactComponent as TypeH2 } from "../../assets/Icons/outline/type-h2.svg";
import { ReactComponent as TypeH3 } from "../../assets/Icons/outline/type-h3.svg";
import { ReactComponent as TypeItalic } from "../../assets/Icons/outline/type-italic.svg";
import { ReactComponent as TypeStrikethrough } from "../../assets/Icons/outline/type-strikethrough.svg";
import { ReactComponent as TypeUnderline } from "../../assets/Icons/outline/type-underline.svg";
import { ReactComponent as Type } from "../../assets/Icons/outline/type.svg";
import { ReactComponent as Ubuntu } from "../../assets/Icons/outline/ubuntu.svg";
import { ReactComponent as UiChecksGrid } from "../../assets/Icons/outline/ui-checks-grid.svg";
import { ReactComponent as UiChecks } from "../../assets/Icons/outline/ui-checks.svg";
import { ReactComponent as UiRadiosGrid } from "../../assets/Icons/outline/ui-radios-grid.svg";
import { ReactComponent as UiRadios } from "../../assets/Icons/outline/ui-radios.svg";
import { ReactComponent as Umbrella } from "../../assets/Icons/outline/umbrella.svg";
import { ReactComponent as Unindent } from "../../assets/Icons/outline/unindent.svg";
import { ReactComponent as Union } from "../../assets/Icons/outline/union.svg";
import { ReactComponent as Unity } from "../../assets/Icons/outline/unity.svg";
import { ReactComponent as UniversalAccessCircle } from "../../assets/Icons/outline/universal-access-circle.svg";
import { ReactComponent as UniversalAccess } from "../../assets/Icons/outline/universal-access.svg";
import { ReactComponent as Unlock } from "../../assets/Icons/outline/unlock.svg";
import { ReactComponent as UpcScan } from "../../assets/Icons/outline/upc-scan.svg";
import { ReactComponent as Upc } from "../../assets/Icons/outline/upc.svg";
import { ReactComponent as Upload } from "../../assets/Icons/outline/upload.svg";
import { ReactComponent as UsbC } from "../../assets/Icons/outline/usb-c.svg";
import { ReactComponent as UsbDrive } from "../../assets/Icons/outline/usb-drive.svg";
import { ReactComponent as UsbMicro } from "../../assets/Icons/outline/usb-micro.svg";
import { ReactComponent as UsbMini } from "../../assets/Icons/outline/usb-mini.svg";
import { ReactComponent as UsbPlug } from "../../assets/Icons/outline/usb-plug.svg";
import { ReactComponent as UsbSymbol } from "../../assets/Icons/outline/usb-symbol.svg";
import { ReactComponent as Usb } from "../../assets/Icons/outline/usb.svg";
import { ReactComponent as Valentine } from "../../assets/Icons/outline/valentine.svg";
import { ReactComponent as Valentine2 } from "../../assets/Icons/outline/valentine2.svg";
import { ReactComponent as VectorPen } from "../../assets/Icons/outline/vector-pen.svg";
import { ReactComponent as ViewList } from "../../assets/Icons/outline/view-list.svg";
import { ReactComponent as ViewStacked } from "../../assets/Icons/outline/view-stacked.svg";
import { ReactComponent as Vimeo } from "../../assets/Icons/outline/vimeo.svg";
import { ReactComponent as Vinyl } from "../../assets/Icons/outline/vinyl.svg";
import { ReactComponent as Virus } from "../../assets/Icons/outline/virus.svg";
import { ReactComponent as Virus2 } from "../../assets/Icons/outline/virus2.svg";
import { ReactComponent as Voicemail } from "../../assets/Icons/outline/voicemail.svg";
import { ReactComponent as VolumeDown } from "../../assets/Icons/outline/volume-down.svg";
import { ReactComponent as VolumeMute } from "../../assets/Icons/outline/volume-mute.svg";
import { ReactComponent as VolumeOff } from "../../assets/Icons/outline/volume-off.svg";
import { ReactComponent as VolumeUp } from "../../assets/Icons/outline/volume-up.svg";
import { ReactComponent as Vr } from "../../assets/Icons/outline/vr.svg";
import { ReactComponent as Wallet } from "../../assets/Icons/outline/wallet.svg";
import { ReactComponent as Wallet2 } from "../../assets/Icons/outline/wallet2.svg";
import { ReactComponent as Watch } from "../../assets/Icons/outline/watch.svg";
import { ReactComponent as Water } from "../../assets/Icons/outline/water.svg";
import { ReactComponent as Webcam } from "../../assets/Icons/outline/webcam.svg";
import { ReactComponent as Wechat } from "../../assets/Icons/outline/wechat.svg";
import { ReactComponent as Whatsapp } from "../../assets/Icons/outline/whatsapp.svg";
import { ReactComponent as Wifi1 } from "../../assets/Icons/outline/wifi-1.svg";
import { ReactComponent as Wifi2 } from "../../assets/Icons/outline/wifi-2.svg";
import { ReactComponent as WifiOff } from "../../assets/Icons/outline/wifi-off.svg";
import { ReactComponent as Wifi } from "../../assets/Icons/outline/wifi.svg";
import { ReactComponent as Wikipedia } from "../../assets/Icons/outline/wikipedia.svg";
import { ReactComponent as Wind } from "../../assets/Icons/outline/wind.svg";
import { ReactComponent as WindowDash } from "../../assets/Icons/outline/window-dash.svg";
import { ReactComponent as WindowDesktop } from "../../assets/Icons/outline/window-desktop.svg";
import { ReactComponent as WindowDock } from "../../assets/Icons/outline/window-dock.svg";
import { ReactComponent as WindowFullscreen } from "../../assets/Icons/outline/window-fullscreen.svg";
import { ReactComponent as WindowPlus } from "../../assets/Icons/outline/window-plus.svg";
import { ReactComponent as WindowSidebar } from "../../assets/Icons/outline/window-sidebar.svg";
import { ReactComponent as WindowSplit } from "../../assets/Icons/outline/window-split.svg";
import { ReactComponent as WindowStack } from "../../assets/Icons/outline/window-stack.svg";
import { ReactComponent as WindowX } from "../../assets/Icons/outline/window-x.svg";
import { ReactComponent as Window } from "../../assets/Icons/outline/window.svg";
import { ReactComponent as Windows } from "../../assets/Icons/outline/windows.svg";
import { ReactComponent as Wordpress } from "../../assets/Icons/outline/wordpress.svg";
import { ReactComponent as WrenchAdjustableCircle } from "../../assets/Icons/outline/wrench-adjustable-circle.svg";
import { ReactComponent as WrenchAdjustable } from "../../assets/Icons/outline/wrench-adjustable.svg";
import { ReactComponent as Wrench } from "../../assets/Icons/outline/wrench.svg";
import { ReactComponent as XCircle } from "../../assets/Icons/outline/x-circle.svg";
import { ReactComponent as XDiamond } from "../../assets/Icons/outline/x-diamond.svg";
import { ReactComponent as XLg } from "../../assets/Icons/outline/x-lg.svg";
import { ReactComponent as XOctagon } from "../../assets/Icons/outline/x-octagon.svg";
import { ReactComponent as XSquare } from "../../assets/Icons/outline/x-square.svg";
import { ReactComponent as X } from "../../assets/Icons/outline/x.svg";
import { ReactComponent as Xbox } from "../../assets/Icons/outline/xbox.svg";
import { ReactComponent as Yelp } from "../../assets/Icons/outline/yelp.svg";
import { ReactComponent as YinYang } from "../../assets/Icons/outline/yin-yang.svg";
import { ReactComponent as Youtube } from "../../assets/Icons/outline/youtube.svg";
import { ReactComponent as ZoomIn } from "../../assets/Icons/outline/zoom-in.svg";
import { ReactComponent as ZoomOut } from "../../assets/Icons/outline/zoom-out.svg";

export interface LionIconProps {
  name: LionIConType;
  width?: number | string;
  height?: number | string;
  theme?: Theme;
  className?: string;
}

export const LionIcon: React.FC<LionIconProps> = ({
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
    case "Circle0":
      return <Circle0 width={width} height={height} className={classes} />;
    case "Square0":
      return <Square0 width={width} height={height} className={classes} />;
    case "Circle1":
      return <Circle1 width={width} height={height} className={classes} />;
    case "Square1":
      return <Square1 width={width} height={height} className={classes} />;
    case "Icon123":
      return <Icon123 width={width} height={height} className={classes} />;
    case "Circle2":
      return <Circle2 width={width} height={height} className={classes} />;
    case "Square2":
      return <Square2 width={width} height={height} className={classes} />;
    case "Circle3":
      return <Circle3 width={width} height={height} className={classes} />;
    case "Square3":
      return <Square3 width={width} height={height} className={classes} />;
    case "Circle4":
      return <Circle4 width={width} height={height} className={classes} />;
    case "Square4":
      return <Square4 width={width} height={height} className={classes} />;
    case "Circle5":
      return <Circle5 width={width} height={height} className={classes} />;
    case "Square5":
      return <Square5 width={width} height={height} className={classes} />;
    case "Circle6":
      return <Circle6 width={width} height={height} className={classes} />;
    case "Square6":
      return <Square6 width={width} height={height} className={classes} />;
    case "Circle7":
      return <Circle7 width={width} height={height} className={classes} />;
    case "Square7":
      return <Square7 width={width} height={height} className={classes} />;
    case "Circle8":
      return <Circle8 width={width} height={height} className={classes} />;
    case "Square8":
      return <Square8 width={width} height={height} className={classes} />;
    case "Circle9":
      return <Circle9 width={width} height={height} className={classes} />;
    case "Square9":
      return <Square9 width={width} height={height} className={classes} />;
    case "Activity":
      return <Activity width={width} height={height} className={classes} />;
    case "AirplaneEngines":
      return (
        <AirplaneEngines width={width} height={height} className={classes} />
      );
    case "Airplane":
      return <Airplane width={width} height={height} className={classes} />;
    case "Alarm":
      return <Alarm width={width} height={height} className={classes} />;
    case "Alexa":
      return <Alexa width={width} height={height} className={classes} />;
    case "AlignBottom":
      return <AlignBottom width={width} height={height} className={classes} />;
    case "AlignCenter":
      return <AlignCenter width={width} height={height} className={classes} />;
    case "AlignEnd":
      return <AlignEnd width={width} height={height} className={classes} />;
    case "AlignMiddle":
      return <AlignMiddle width={width} height={height} className={classes} />;
    case "AlignStart":
      return <AlignStart width={width} height={height} className={classes} />;
    case "AlignTop":
      return <AlignTop width={width} height={height} className={classes} />;
    case "Alipay":
      return <Alipay width={width} height={height} className={classes} />;
    case "Alt":
      return <Alt width={width} height={height} className={classes} />;
    case "Amd":
      return <Amd width={width} height={height} className={classes} />;
    case "Android":
      return <Android width={width} height={height} className={classes} />;
    case "Android2":
      return <Android2 width={width} height={height} className={classes} />;
    case "AppIndicator":
      return <AppIndicator width={width} height={height} className={classes} />;
    case "App":
      return <App width={width} height={height} className={classes} />;
    case "Apple":
      return <Apple width={width} height={height} className={classes} />;
    case "Archive":
      return <Archive width={width} height={height} className={classes} />;
    case "Arrow90degDown":
      return (
        <Arrow90degDown width={width} height={height} className={classes} />
      );
    case "Arrow90degLeft":
      return (
        <Arrow90degLeft width={width} height={height} className={classes} />
      );
    case "Arrow90degRight":
      return (
        <Arrow90degRight width={width} height={height} className={classes} />
      );
    case "Arrow90degUp":
      return <Arrow90degUp width={width} height={height} className={classes} />;
    case "ArrowBarDown":
      return <ArrowBarDown width={width} height={height} className={classes} />;
    case "ArrowBarLeft":
      return <ArrowBarLeft width={width} height={height} className={classes} />;
    case "ArrowBarRight":
      return (
        <ArrowBarRight width={width} height={height} className={classes} />
      );
    case "ArrowBarUp":
      return <ArrowBarUp width={width} height={height} className={classes} />;
    case "ArrowClockwise":
      return (
        <ArrowClockwise width={width} height={height} className={classes} />
      );
    case "ArrowCounterclockwise":
      return (
        <ArrowCounterclockwise
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ArrowDownCircle":
      return (
        <ArrowDownCircle width={width} height={height} className={classes} />
      );
    case "ArrowDownLeftCircle":
      return (
        <ArrowDownLeftCircle
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ArrowDownLeftSquare":
      return (
        <ArrowDownLeftSquare
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ArrowDownLeft":
      return (
        <ArrowDownLeft width={width} height={height} className={classes} />
      );
    case "ArrowDownRightCircle":
      return (
        <ArrowDownRightCircle
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ArrowDownRightSquare":
      return (
        <ArrowDownRightSquare
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ArrowDownRight":
      return (
        <ArrowDownRight width={width} height={height} className={classes} />
      );
    case "ArrowDownShort":
      return (
        <ArrowDownShort width={width} height={height} className={classes} />
      );
    case "ArrowDownSquare":
      return (
        <ArrowDownSquare width={width} height={height} className={classes} />
      );
    case "ArrowDownUp":
      return <ArrowDownUp width={width} height={height} className={classes} />;
    case "ArrowDown":
      return <ArrowDown width={width} height={height} className={classes} />;
    case "ArrowLeftCircle":
      return (
        <ArrowLeftCircle width={width} height={height} className={classes} />
      );
    case "ArrowLeftRight":
      return (
        <ArrowLeftRight width={width} height={height} className={classes} />
      );
    case "ArrowLeftShort":
      return (
        <ArrowLeftShort width={width} height={height} className={classes} />
      );
    case "ArrowLeftSquare":
      return (
        <ArrowLeftSquare width={width} height={height} className={classes} />
      );
    case "ArrowLeft":
      return <ArrowLeft width={width} height={height} className={classes} />;
    case "ArrowRepeat":
      return <ArrowRepeat width={width} height={height} className={classes} />;
    case "ArrowReturnLeft":
      return (
        <ArrowReturnLeft width={width} height={height} className={classes} />
      );
    case "ArrowReturnRight":
      return (
        <ArrowReturnRight width={width} height={height} className={classes} />
      );
    case "ArrowRightCircle":
      return (
        <ArrowRightCircle width={width} height={height} className={classes} />
      );
    case "ArrowRightShort":
      return (
        <ArrowRightShort width={width} height={height} className={classes} />
      );
    case "ArrowRightSquare":
      return (
        <ArrowRightSquare width={width} height={height} className={classes} />
      );
    case "ArrowRight":
      return <ArrowRight width={width} height={height} className={classes} />;
    case "ArrowThroughHeart":
      return (
        <ArrowThroughHeart width={width} height={height} className={classes} />
      );
    case "ArrowUpCircle":
      return (
        <ArrowUpCircle width={width} height={height} className={classes} />
      );
    case "ArrowUpLeftCircle":
      return (
        <ArrowUpLeftCircle width={width} height={height} className={classes} />
      );
    case "ArrowUpLeftSquare":
      return (
        <ArrowUpLeftSquare width={width} height={height} className={classes} />
      );
    case "ArrowUpLeft":
      return <ArrowUpLeft width={width} height={height} className={classes} />;
    case "ArrowUpRightCircle":
      return (
        <ArrowUpRightCircle width={width} height={height} className={classes} />
      );
    case "ArrowUpRightSquare":
      return (
        <ArrowUpRightSquare width={width} height={height} className={classes} />
      );
    case "ArrowUpRight":
      return <ArrowUpRight width={width} height={height} className={classes} />;
    case "ArrowUpShort":
      return <ArrowUpShort width={width} height={height} className={classes} />;
    case "ArrowUpSquare":
      return (
        <ArrowUpSquare width={width} height={height} className={classes} />
      );
    case "ArrowUp":
      return <ArrowUp width={width} height={height} className={classes} />;
    case "ArrowsAngleContract":
      return (
        <ArrowsAngleContract
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ArrowsAngleExpand":
      return (
        <ArrowsAngleExpand width={width} height={height} className={classes} />
      );
    case "ArrowsCollapse":
      return (
        <ArrowsCollapse width={width} height={height} className={classes} />
      );
    case "ArrowsExpand":
      return <ArrowsExpand width={width} height={height} className={classes} />;
    case "ArrowsFullscreen":
      return (
        <ArrowsFullscreen width={width} height={height} className={classes} />
      );
    case "ArrowsMove":
      return <ArrowsMove width={width} height={height} className={classes} />;
    case "AspectRatio":
      return <AspectRatio width={width} height={height} className={classes} />;
    case "Asterisk":
      return <Asterisk width={width} height={height} className={classes} />;
    case "At":
      return <At width={width} height={height} className={classes} />;
    case "Award":
      return <Award width={width} height={height} className={classes} />;
    case "Back":
      return <Back width={width} height={height} className={classes} />;
    case "BackspaceReverse":
      return (
        <BackspaceReverse width={width} height={height} className={classes} />
      );
    case "Backspace":
      return <Backspace width={width} height={height} className={classes} />;
    case "Badge3d":
      return <Badge3d width={width} height={height} className={classes} />;
    case "Badge4k":
      return <Badge4k width={width} height={height} className={classes} />;
    case "Badge8k":
      return <Badge8k width={width} height={height} className={classes} />;
    case "BadgeAd":
      return <BadgeAd width={width} height={height} className={classes} />;
    case "BadgeAr":
      return <BadgeAr width={width} height={height} className={classes} />;
    case "BadgeCc":
      return <BadgeCc width={width} height={height} className={classes} />;
    case "BadgeHd":
      return <BadgeHd width={width} height={height} className={classes} />;
    case "BadgeSd":
      return <BadgeSd width={width} height={height} className={classes} />;
    case "BadgeTm":
      return <BadgeTm width={width} height={height} className={classes} />;
    case "BadgeVo":
      return <BadgeVo width={width} height={height} className={classes} />;
    case "BadgeVr":
      return <BadgeVr width={width} height={height} className={classes} />;
    case "BadgeWc":
      return <BadgeWc width={width} height={height} className={classes} />;
    case "BagCheck":
      return <BagCheck width={width} height={height} className={classes} />;
    case "BagDash":
      return <BagDash width={width} height={height} className={classes} />;
    case "BagHeart":
      return <BagHeart width={width} height={height} className={classes} />;
    case "BagPlus":
      return <BagPlus width={width} height={height} className={classes} />;
    case "BagX":
      return <BagX width={width} height={height} className={classes} />;
    case "Bag":
      return <Bag width={width} height={height} className={classes} />;
    case "BalloonHeart":
      return <BalloonHeart width={width} height={height} className={classes} />;
    case "Balloon":
      return <Balloon width={width} height={height} className={classes} />;
    case "Bandaid":
      return <Bandaid width={width} height={height} className={classes} />;
    case "Bank":
      return <Bank width={width} height={height} className={classes} />;
    case "Bank2":
      return <Bank2 width={width} height={height} className={classes} />;
    case "BarChartLine":
      return <BarChartLine width={width} height={height} className={classes} />;
    case "BarChartSteps":
      return (
        <BarChartSteps width={width} height={height} className={classes} />
      );
    case "BarChart":
      return <BarChart width={width} height={height} className={classes} />;
    case "Basket":
      return <Basket width={width} height={height} className={classes} />;
    case "Basket2":
      return <Basket2 width={width} height={height} className={classes} />;
    case "Basket3":
      return <Basket3 width={width} height={height} className={classes} />;
    case "BatteryCharging":
      return (
        <BatteryCharging width={width} height={height} className={classes} />
      );
    case "BatteryFull":
      return <BatteryFull width={width} height={height} className={classes} />;
    case "Battery":
      return <Battery width={width} height={height} className={classes} />;
    case "Behance":
      return <Behance width={width} height={height} className={classes} />;
    case "BellSlash":
      return <BellSlash width={width} height={height} className={classes} />;
    case "Bell":
      return <Bell width={width} height={height} className={classes} />;
    case "Bezier":
      return <Bezier width={width} height={height} className={classes} />;
    case "Bezier2":
      return <Bezier2 width={width} height={height} className={classes} />;
    case "Bicycle":
      return <Bicycle width={width} height={height} className={classes} />;
    case "Binoculars":
      return <Binoculars width={width} height={height} className={classes} />;
    case "BlockquoteLeft":
      return (
        <BlockquoteLeft width={width} height={height} className={classes} />
      );
    case "BlockquoteRight":
      return (
        <BlockquoteRight width={width} height={height} className={classes} />
      );
    case "Bluetooth":
      return <Bluetooth width={width} height={height} className={classes} />;
    case "BodyText":
      return <BodyText width={width} height={height} className={classes} />;
    case "Book":
      return <Book width={width} height={height} className={classes} />;
    case "BookmarkCheck":
      return (
        <BookmarkCheck width={width} height={height} className={classes} />
      );
    case "BookmarkDash":
      return <BookmarkDash width={width} height={height} className={classes} />;
    case "BookmarkHeart":
      return (
        <BookmarkHeart width={width} height={height} className={classes} />
      );
    case "BookmarkPlus":
      return <BookmarkPlus width={width} height={height} className={classes} />;
    case "BookmarkStar":
      return <BookmarkStar width={width} height={height} className={classes} />;
    case "BookmarkX":
      return <BookmarkX width={width} height={height} className={classes} />;
    case "Bookmark":
      return <Bookmark width={width} height={height} className={classes} />;
    case "Bookmarks":
      return <Bookmarks width={width} height={height} className={classes} />;
    case "Bookshelf":
      return <Bookshelf width={width} height={height} className={classes} />;
    case "Boombox":
      return <Boombox width={width} height={height} className={classes} />;
    case "BorderAll":
      return <BorderAll width={width} height={height} className={classes} />;
    case "BorderBottom":
      return <BorderBottom width={width} height={height} className={classes} />;
    case "BorderCenter":
      return <BorderCenter width={width} height={height} className={classes} />;
    case "BorderInner":
      return <BorderInner width={width} height={height} className={classes} />;
    case "BorderLeft":
      return <BorderLeft width={width} height={height} className={classes} />;
    case "BorderMiddle":
      return <BorderMiddle width={width} height={height} className={classes} />;
    case "BorderOuter":
      return <BorderOuter width={width} height={height} className={classes} />;
    case "BorderRight":
      return <BorderRight width={width} height={height} className={classes} />;
    case "BorderStyle":
      return <BorderStyle width={width} height={height} className={classes} />;
    case "BorderTop":
      return <BorderTop width={width} height={height} className={classes} />;
    case "BorderWidth":
      return <BorderWidth width={width} height={height} className={classes} />;
    case "Border":
      return <Border width={width} height={height} className={classes} />;
    case "BoundingBoxCircles":
      return (
        <BoundingBoxCircles width={width} height={height} className={classes} />
      );
    case "BoundingBox":
      return <BoundingBox width={width} height={height} className={classes} />;
    case "BoxArrowDownLeft":
      return (
        <BoxArrowDownLeft width={width} height={height} className={classes} />
      );
    case "BoxArrowDownRight":
      return (
        <BoxArrowDownRight width={width} height={height} className={classes} />
      );
    case "BoxArrowDown":
      return <BoxArrowDown width={width} height={height} className={classes} />;
    case "BoxArrowInDownLeft":
      return (
        <BoxArrowInDownLeft width={width} height={height} className={classes} />
      );
    case "BoxArrowInDownRight":
      return (
        <BoxArrowInDownRight
          width={width}
          height={height}
          className={classes}
        />
      );
    case "BoxArrowInDown":
      return (
        <BoxArrowInDown width={width} height={height} className={classes} />
      );
    case "BoxArrowInLeft":
      return (
        <BoxArrowInLeft width={width} height={height} className={classes} />
      );
    case "BoxArrowInRight":
      return (
        <BoxArrowInRight width={width} height={height} className={classes} />
      );
    case "BoxArrowInUpLeft":
      return (
        <BoxArrowInUpLeft width={width} height={height} className={classes} />
      );
    case "BoxArrowInUpRight":
      return (
        <BoxArrowInUpRight width={width} height={height} className={classes} />
      );
    case "BoxArrowInUp":
      return <BoxArrowInUp width={width} height={height} className={classes} />;
    case "BoxArrowLeft":
      return <BoxArrowLeft width={width} height={height} className={classes} />;
    case "BoxArrowRight":
      return (
        <BoxArrowRight width={width} height={height} className={classes} />
      );
    case "BoxArrowUpLeft":
      return (
        <BoxArrowUpLeft width={width} height={height} className={classes} />
      );
    case "BoxArrowUpRight":
      return (
        <BoxArrowUpRight width={width} height={height} className={classes} />
      );
    case "BoxArrowUp":
      return <BoxArrowUp width={width} height={height} className={classes} />;
    case "BoxSeam":
      return <BoxSeam width={width} height={height} className={classes} />;
    case "Box":
      return <Box width={width} height={height} className={classes} />;
    case "Box2Heart":
      return <Box2Heart width={width} height={height} className={classes} />;
    case "Box2":
      return <Box2 width={width} height={height} className={classes} />;
    case "Boxes":
      return <Boxes width={width} height={height} className={classes} />;
    case "BracesAsterisk":
      return (
        <BracesAsterisk width={width} height={height} className={classes} />
      );
    case "Braces":
      return <Braces width={width} height={height} className={classes} />;
    case "Bricks":
      return <Bricks width={width} height={height} className={classes} />;
    case "Briefcase":
      return <Briefcase width={width} height={height} className={classes} />;
    case "BrightnessAltHigh":
      return (
        <BrightnessAltHigh width={width} height={height} className={classes} />
      );
    case "BrightnessAltLow":
      return (
        <BrightnessAltLow width={width} height={height} className={classes} />
      );
    case "BrightnessHigh":
      return (
        <BrightnessHigh width={width} height={height} className={classes} />
      );
    case "BrightnessLow":
      return (
        <BrightnessLow width={width} height={height} className={classes} />
      );
    case "BroadcastPin":
      return <BroadcastPin width={width} height={height} className={classes} />;
    case "Broadcast":
      return <Broadcast width={width} height={height} className={classes} />;
    case "BrowserChrome":
      return (
        <BrowserChrome width={width} height={height} className={classes} />
      );
    case "BrowserEdge":
      return <BrowserEdge width={width} height={height} className={classes} />;
    case "BrowserFirefox":
      return (
        <BrowserFirefox width={width} height={height} className={classes} />
      );
    case "BrowserSafari":
      return (
        <BrowserSafari width={width} height={height} className={classes} />
      );
    case "Brush":
      return <Brush width={width} height={height} className={classes} />;
    case "Bucket":
      return <Bucket width={width} height={height} className={classes} />;
    case "Bug":
      return <Bug width={width} height={height} className={classes} />;
    case "BuildingAdd":
      return <BuildingAdd width={width} height={height} className={classes} />;
    case "BuildingCheck":
      return (
        <BuildingCheck width={width} height={height} className={classes} />
      );
    case "BuildingDash":
      return <BuildingDash width={width} height={height} className={classes} />;
    case "BuildingDown":
      return <BuildingDown width={width} height={height} className={classes} />;
    case "BuildingExclamation":
      return (
        <BuildingExclamation
          width={width}
          height={height}
          className={classes}
        />
      );
    case "BuildingGear":
      return <BuildingGear width={width} height={height} className={classes} />;
    case "BuildingLock":
      return <BuildingLock width={width} height={height} className={classes} />;
    case "BuildingSlash":
      return (
        <BuildingSlash width={width} height={height} className={classes} />
      );
    case "BuildingUp":
      return <BuildingUp width={width} height={height} className={classes} />;
    case "BuildingX":
      return <BuildingX width={width} height={height} className={classes} />;
    case "Building":
      return <Building width={width} height={height} className={classes} />;
    case "Buildings":
      return <Buildings width={width} height={height} className={classes} />;
    case "Bullseye":
      return <Bullseye width={width} height={height} className={classes} />;
    case "BusFront":
      return <BusFront width={width} height={height} className={classes} />;
    case "CCircle":
      return <CCircle width={width} height={height} className={classes} />;
    case "CSquare":
      return <CSquare width={width} height={height} className={classes} />;
    case "Calculator":
      return <Calculator width={width} height={height} className={classes} />;
    case "CalendarCheck":
      return (
        <CalendarCheck width={width} height={height} className={classes} />
      );
    case "CalendarDate":
      return <CalendarDate width={width} height={height} className={classes} />;
    case "CalendarDay":
      return <CalendarDay width={width} height={height} className={classes} />;
    case "CalendarEvent":
      return (
        <CalendarEvent width={width} height={height} className={classes} />
      );
    case "CalendarHeart":
      return (
        <CalendarHeart width={width} height={height} className={classes} />
      );
    case "CalendarMinus":
      return (
        <CalendarMinus width={width} height={height} className={classes} />
      );
    case "CalendarMonth":
      return (
        <CalendarMonth width={width} height={height} className={classes} />
      );
    case "CalendarPlus":
      return <CalendarPlus width={width} height={height} className={classes} />;
    case "CalendarRange":
      return (
        <CalendarRange width={width} height={height} className={classes} />
      );
    case "CalendarWeek":
      return <CalendarWeek width={width} height={height} className={classes} />;
    case "CalendarX":
      return <CalendarX width={width} height={height} className={classes} />;
    case "Calendar":
      return <Calendar width={width} height={height} className={classes} />;
    case "Calendar2Check":
      return (
        <Calendar2Check width={width} height={height} className={classes} />
      );
    case "Calendar2Date":
      return (
        <Calendar2Date width={width} height={height} className={classes} />
      );
    case "Calendar2Day":
      return <Calendar2Day width={width} height={height} className={classes} />;
    case "Calendar2Event":
      return (
        <Calendar2Event width={width} height={height} className={classes} />
      );
    case "Calendar2Heart":
      return (
        <Calendar2Heart width={width} height={height} className={classes} />
      );
    case "Calendar2Minus":
      return (
        <Calendar2Minus width={width} height={height} className={classes} />
      );
    case "Calendar2Month":
      return (
        <Calendar2Month width={width} height={height} className={classes} />
      );
    case "Calendar2Plus":
      return (
        <Calendar2Plus width={width} height={height} className={classes} />
      );
    case "Calendar2Range":
      return (
        <Calendar2Range width={width} height={height} className={classes} />
      );
    case "Calendar2Week":
      return (
        <Calendar2Week width={width} height={height} className={classes} />
      );
    case "Calendar2X":
      return <Calendar2X width={width} height={height} className={classes} />;
    case "Calendar2":
      return <Calendar2 width={width} height={height} className={classes} />;
    case "Calendar3Event":
      return (
        <Calendar3Event width={width} height={height} className={classes} />
      );
    case "Calendar3Range":
      return (
        <Calendar3Range width={width} height={height} className={classes} />
      );
    case "Calendar3Week":
      return (
        <Calendar3Week width={width} height={height} className={classes} />
      );
    case "Calendar3":
      return <Calendar3 width={width} height={height} className={classes} />;
    case "Calendar4Event":
      return (
        <Calendar4Event width={width} height={height} className={classes} />
      );
    case "Calendar4Range":
      return (
        <Calendar4Range width={width} height={height} className={classes} />
      );
    case "Calendar4Week":
      return (
        <Calendar4Week width={width} height={height} className={classes} />
      );
    case "Calendar4":
      return <Calendar4 width={width} height={height} className={classes} />;
    case "CameraReels":
      return <CameraReels width={width} height={height} className={classes} />;
    case "CameraVideoOff":
      return (
        <CameraVideoOff width={width} height={height} className={classes} />
      );
    case "CameraVideo":
      return <CameraVideo width={width} height={height} className={classes} />;
    case "Camera":
      return <Camera width={width} height={height} className={classes} />;
    case "Camera2":
      return <Camera2 width={width} height={height} className={classes} />;
    case "Capslock":
      return <Capslock width={width} height={height} className={classes} />;
    case "CapsulePill":
      return <CapsulePill width={width} height={height} className={classes} />;
    case "Capsule":
      return <Capsule width={width} height={height} className={classes} />;
    case "CarFront":
      return <CarFront width={width} height={height} className={classes} />;
    case "CardChecklist":
      return (
        <CardChecklist width={width} height={height} className={classes} />
      );
    case "CardHeading":
      return <CardHeading width={width} height={height} className={classes} />;
    case "CardImage":
      return <CardImage width={width} height={height} className={classes} />;
    case "CardList":
      return <CardList width={width} height={height} className={classes} />;
    case "CardText":
      return <CardText width={width} height={height} className={classes} />;
    case "CaretDownSquare":
      return (
        <CaretDownSquare width={width} height={height} className={classes} />
      );
    case "CaretDown":
      return <CaretDown width={width} height={height} className={classes} />;
    case "CaretLeftSquare":
      return (
        <CaretLeftSquare width={width} height={height} className={classes} />
      );
    case "CaretLeft":
      return <CaretLeft width={width} height={height} className={classes} />;
    case "CaretRightSquare":
      return (
        <CaretRightSquare width={width} height={height} className={classes} />
      );
    case "CaretRight":
      return <CaretRight width={width} height={height} className={classes} />;
    case "CaretUpSquare":
      return (
        <CaretUpSquare width={width} height={height} className={classes} />
      );
    case "CaretUp":
      return <CaretUp width={width} height={height} className={classes} />;
    case "CartCheck":
      return <CartCheck width={width} height={height} className={classes} />;
    case "CartDash":
      return <CartDash width={width} height={height} className={classes} />;
    case "CartPlus":
      return <CartPlus width={width} height={height} className={classes} />;
    case "CartX":
      return <CartX width={width} height={height} className={classes} />;
    case "Cart":
      return <Cart width={width} height={height} className={classes} />;
    case "Cart2":
      return <Cart2 width={width} height={height} className={classes} />;
    case "Cart3":
      return <Cart3 width={width} height={height} className={classes} />;
    case "Cart4":
      return <Cart4 width={width} height={height} className={classes} />;
    case "CashCoin":
      return <CashCoin width={width} height={height} className={classes} />;
    case "CashStack":
      return <CashStack width={width} height={height} className={classes} />;
    case "Cash":
      return <Cash width={width} height={height} className={classes} />;
    case "Cassette":
      return <Cassette width={width} height={height} className={classes} />;
    case "Cast":
      return <Cast width={width} height={height} className={classes} />;
    case "CcCircle":
      return <CcCircle width={width} height={height} className={classes} />;
    case "CcSquare":
      return <CcSquare width={width} height={height} className={classes} />;
    case "ChatDots":
      return <ChatDots width={width} height={height} className={classes} />;
    case "ChatHeart":
      return <ChatHeart width={width} height={height} className={classes} />;
    case "ChatLeftDots":
      return <ChatLeftDots width={width} height={height} className={classes} />;
    case "ChatLeftHeart":
      return (
        <ChatLeftHeart width={width} height={height} className={classes} />
      );
    case "ChatLeftQuote":
      return (
        <ChatLeftQuote width={width} height={height} className={classes} />
      );
    case "ChatLeftText":
      return <ChatLeftText width={width} height={height} className={classes} />;
    case "ChatLeft":
      return <ChatLeft width={width} height={height} className={classes} />;
    case "ChatQuote":
      return <ChatQuote width={width} height={height} className={classes} />;
    case "ChatRightDots":
      return (
        <ChatRightDots width={width} height={height} className={classes} />
      );
    case "ChatRightHeart":
      return (
        <ChatRightHeart width={width} height={height} className={classes} />
      );
    case "ChatRightQuote":
      return (
        <ChatRightQuote width={width} height={height} className={classes} />
      );
    case "ChatRightText":
      return (
        <ChatRightText width={width} height={height} className={classes} />
      );
    case "ChatRight":
      return <ChatRight width={width} height={height} className={classes} />;
    case "ChatSquareDots":
      return (
        <ChatSquareDots width={width} height={height} className={classes} />
      );
    case "ChatSquareHeart":
      return (
        <ChatSquareHeart width={width} height={height} className={classes} />
      );
    case "ChatSquareQuote":
      return (
        <ChatSquareQuote width={width} height={height} className={classes} />
      );
    case "ChatSquareText":
      return (
        <ChatSquareText width={width} height={height} className={classes} />
      );
    case "ChatSquare":
      return <ChatSquare width={width} height={height} className={classes} />;
    case "ChatText":
      return <ChatText width={width} height={height} className={classes} />;
    case "Chat":
      return <Chat width={width} height={height} className={classes} />;
    case "CheckAll":
      return <CheckAll width={width} height={height} className={classes} />;
    case "CheckCircle":
      return <CheckCircle width={width} height={height} className={classes} />;
    case "CheckLg":
      return <CheckLg width={width} height={height} className={classes} />;
    case "CheckSquare":
      return <CheckSquare width={width} height={height} className={classes} />;
    case "Check":
      return <Check width={width} height={height} className={classes} />;
    case "Check2All":
      return <Check2All width={width} height={height} className={classes} />;
    case "Check2Circle":
      return <Check2Circle width={width} height={height} className={classes} />;
    case "Check2Square":
      return <Check2Square width={width} height={height} className={classes} />;
    case "Check2":
      return <Check2 width={width} height={height} className={classes} />;
    case "ChevronBarContract":
      return (
        <ChevronBarContract width={width} height={height} className={classes} />
      );
    case "ChevronBarDown":
      return (
        <ChevronBarDown width={width} height={height} className={classes} />
      );
    case "ChevronBarExpand":
      return (
        <ChevronBarExpand width={width} height={height} className={classes} />
      );
    case "ChevronBarLeft":
      return (
        <ChevronBarLeft width={width} height={height} className={classes} />
      );
    case "ChevronBarRight":
      return (
        <ChevronBarRight width={width} height={height} className={classes} />
      );
    case "ChevronBarUp":
      return <ChevronBarUp width={width} height={height} className={classes} />;
    case "ChevronCompactDown":
      return (
        <ChevronCompactDown width={width} height={height} className={classes} />
      );
    case "ChevronCompactLeft":
      return (
        <ChevronCompactLeft width={width} height={height} className={classes} />
      );
    case "ChevronCompactRight":
      return (
        <ChevronCompactRight
          width={width}
          height={height}
          className={classes}
        />
      );
    case "ChevronCompactUp":
      return (
        <ChevronCompactUp width={width} height={height} className={classes} />
      );
    case "ChevronContract":
      return (
        <ChevronContract width={width} height={height} className={classes} />
      );
    case "ChevronDoubleDown":
      return (
        <ChevronDoubleDown width={width} height={height} className={classes} />
      );
    case "ChevronDoubleLeft":
      return (
        <ChevronDoubleLeft width={width} height={height} className={classes} />
      );
    case "ChevronDoubleRight":
      return (
        <ChevronDoubleRight width={width} height={height} className={classes} />
      );
    case "ChevronDoubleUp":
      return (
        <ChevronDoubleUp width={width} height={height} className={classes} />
      );
    case "ChevronDown":
      return <ChevronDown width={width} height={height} className={classes} />;
    case "ChevronExpand":
      return (
        <ChevronExpand width={width} height={height} className={classes} />
      );
    case "ChevronLeft":
      return <ChevronLeft width={width} height={height} className={classes} />;
    case "ChevronRight":
      return <ChevronRight width={width} height={height} className={classes} />;
    case "ChevronUp":
      return <ChevronUp width={width} height={height} className={classes} />;
    case "CircleSquare":
      return <CircleSquare width={width} height={height} className={classes} />;
    case "Circle":
      return <Circle width={width} height={height} className={classes} />;
    case "ClipboardCheck":
      return (
        <ClipboardCheck width={width} height={height} className={classes} />
      );
    case "ClipboardData":
      return (
        <ClipboardData width={width} height={height} className={classes} />
      );
    case "ClipboardHeart":
      return (
        <ClipboardHeart width={width} height={height} className={classes} />
      );
    case "ClipboardMinus":
      return (
        <ClipboardMinus width={width} height={height} className={classes} />
      );
    case "ClipboardPlus":
      return (
        <ClipboardPlus width={width} height={height} className={classes} />
      );
    case "ClipboardPulse":
      return (
        <ClipboardPulse width={width} height={height} className={classes} />
      );
    case "ClipboardX":
      return <ClipboardX width={width} height={height} className={classes} />;
    case "Clipboard":
      return <Clipboard width={width} height={height} className={classes} />;
    case "Clipboard2Check":
      return (
        <Clipboard2Check width={width} height={height} className={classes} />
      );
    case "Clipboard2Data":
      return (
        <Clipboard2Data width={width} height={height} className={classes} />
      );
    case "Clipboard2Heart":
      return (
        <Clipboard2Heart width={width} height={height} className={classes} />
      );
    case "Clipboard2Minus":
      return (
        <Clipboard2Minus width={width} height={height} className={classes} />
      );
    case "Clipboard2Plus":
      return (
        <Clipboard2Plus width={width} height={height} className={classes} />
      );
    case "Clipboard2Pulse":
      return (
        <Clipboard2Pulse width={width} height={height} className={classes} />
      );
    case "Clipboard2X":
      return <Clipboard2X width={width} height={height} className={classes} />;
    case "Clipboard2":
      return <Clipboard2 width={width} height={height} className={classes} />;
    case "ClockHistory":
      return <ClockHistory width={width} height={height} className={classes} />;
    case "Clock":
      return <Clock width={width} height={height} className={classes} />;
    case "CloudArrowDown":
      return (
        <CloudArrowDown width={width} height={height} className={classes} />
      );
    case "CloudArrowUp":
      return <CloudArrowUp width={width} height={height} className={classes} />;
    case "CloudCheck":
      return <CloudCheck width={width} height={height} className={classes} />;
    case "CloudDownload":
      return (
        <CloudDownload width={width} height={height} className={classes} />
      );
    case "CloudDrizzle":
      return <CloudDrizzle width={width} height={height} className={classes} />;
    case "CloudFog":
      return <CloudFog width={width} height={height} className={classes} />;
    case "CloudFog2":
      return <CloudFog2 width={width} height={height} className={classes} />;
    case "CloudHail":
      return <CloudHail width={width} height={height} className={classes} />;
    case "CloudHaze":
      return <CloudHaze width={width} height={height} className={classes} />;
    case "CloudHaze2":
      return <CloudHaze2 width={width} height={height} className={classes} />;
    case "CloudLightningRain":
      return (
        <CloudLightningRain width={width} height={height} className={classes} />
      );
    case "CloudLightning":
      return (
        <CloudLightning width={width} height={height} className={classes} />
      );
    case "CloudMinus":
      return <CloudMinus width={width} height={height} className={classes} />;
    case "CloudMoon":
      return <CloudMoon width={width} height={height} className={classes} />;
    case "CloudPlus":
      return <CloudPlus width={width} height={height} className={classes} />;
    case "CloudRainHeavy":
      return (
        <CloudRainHeavy width={width} height={height} className={classes} />
      );
    case "CloudRain":
      return <CloudRain width={width} height={height} className={classes} />;
    case "CloudSlash":
      return <CloudSlash width={width} height={height} className={classes} />;
    case "CloudSleet":
      return <CloudSleet width={width} height={height} className={classes} />;
    case "CloudSnow":
      return <CloudSnow width={width} height={height} className={classes} />;
    case "CloudSun":
      return <CloudSun width={width} height={height} className={classes} />;
    case "CloudUpload":
      return <CloudUpload width={width} height={height} className={classes} />;
    case "Cloud":
      return <Cloud width={width} height={height} className={classes} />;
    case "Clouds":
      return <Clouds width={width} height={height} className={classes} />;
    case "Cloudy":
      return <Cloudy width={width} height={height} className={classes} />;
    case "CodeSlash":
      return <CodeSlash width={width} height={height} className={classes} />;
    case "CodeSquare":
      return <CodeSquare width={width} height={height} className={classes} />;
    case "Code":
      return <Code width={width} height={height} className={classes} />;
    case "Coin":
      return <Coin width={width} height={height} className={classes} />;
    case "CollectionPlay":
      return (
        <CollectionPlay width={width} height={height} className={classes} />
      );
    case "Collection":
      return <Collection width={width} height={height} className={classes} />;
    case "ColumnsGap":
      return <ColumnsGap width={width} height={height} className={classes} />;
    case "Columns":
      return <Columns width={width} height={height} className={classes} />;
    case "Command":
      return <Command width={width} height={height} className={classes} />;
    case "Compass":
      return <Compass width={width} height={height} className={classes} />;
    case "ConeStriped":
      return <ConeStriped width={width} height={height} className={classes} />;
    case "Cone":
      return <Cone width={width} height={height} className={classes} />;
    case "Controller":
      return <Controller width={width} height={height} className={classes} />;
    case "Cpu":
      return <Cpu width={width} height={height} className={classes} />;
    case "CreditCard2Back":
      return (
        <CreditCard2Back width={width} height={height} className={classes} />
      );
    case "CreditCard2Front":
      return (
        <CreditCard2Front width={width} height={height} className={classes} />
      );
    case "CreditCard":
      return <CreditCard width={width} height={height} className={classes} />;
    case "Crop":
      return <Crop width={width} height={height} className={classes} />;
    case "CupHot":
      return <CupHot width={width} height={height} className={classes} />;
    case "CupStraw":
      return <CupStraw width={width} height={height} className={classes} />;
    case "Cup":
      return <Cup width={width} height={height} className={classes} />;
    case "CurrencyBitcoin":
      return (
        <CurrencyBitcoin width={width} height={height} className={classes} />
      );
    case "CurrencyDollar":
      return (
        <CurrencyDollar width={width} height={height} className={classes} />
      );
    case "CurrencyEuro":
      return <CurrencyEuro width={width} height={height} className={classes} />;
    case "CurrencyExchange":
      return (
        <CurrencyExchange width={width} height={height} className={classes} />
      );
    case "CurrencyPound":
      return (
        <CurrencyPound width={width} height={height} className={classes} />
      );
    case "CurrencyRupee":
      return (
        <CurrencyRupee width={width} height={height} className={classes} />
      );
    case "CurrencyYen":
      return <CurrencyYen width={width} height={height} className={classes} />;
    case "CursorText":
      return <CursorText width={width} height={height} className={classes} />;
    case "Cursor":
      return <Cursor width={width} height={height} className={classes} />;
    case "DashCircleDotted":
      return (
        <DashCircleDotted width={width} height={height} className={classes} />
      );
    case "DashCircle":
      return <DashCircle width={width} height={height} className={classes} />;
    case "DashLg":
      return <DashLg width={width} height={height} className={classes} />;
    case "DashSquareDotted":
      return (
        <DashSquareDotted width={width} height={height} className={classes} />
      );
    case "DashSquare":
      return <DashSquare width={width} height={height} className={classes} />;
    case "Dash":
      return <Dash width={width} height={height} className={classes} />;
    case "DatabaseAdd":
      return <DatabaseAdd width={width} height={height} className={classes} />;
    case "DatabaseCheck":
      return (
        <DatabaseCheck width={width} height={height} className={classes} />
      );
    case "DatabaseDash":
      return <DatabaseDash width={width} height={height} className={classes} />;
    case "DatabaseDown":
      return <DatabaseDown width={width} height={height} className={classes} />;
    case "DatabaseExclamation":
      return (
        <DatabaseExclamation
          width={width}
          height={height}
          className={classes}
        />
      );
    case "DatabaseGear":
      return <DatabaseGear width={width} height={height} className={classes} />;
    case "DatabaseLock":
      return <DatabaseLock width={width} height={height} className={classes} />;
    case "DatabaseSlash":
      return (
        <DatabaseSlash width={width} height={height} className={classes} />
      );
    case "DatabaseUp":
      return <DatabaseUp width={width} height={height} className={classes} />;
    case "DatabaseX":
      return <DatabaseX width={width} height={height} className={classes} />;
    case "Database":
      return <Database width={width} height={height} className={classes} />;
    case "DeviceHdd":
      return <DeviceHdd width={width} height={height} className={classes} />;
    case "DeviceSsd":
      return <DeviceSsd width={width} height={height} className={classes} />;
    case "Diagram2":
      return <Diagram2 width={width} height={height} className={classes} />;
    case "Diagram3":
      return <Diagram3 width={width} height={height} className={classes} />;
    case "Diamond":
      return <Diamond width={width} height={height} className={classes} />;
    case "Dice1":
      return <Dice1 width={width} height={height} className={classes} />;
    case "Dice2":
      return <Dice2 width={width} height={height} className={classes} />;
    case "Dice3":
      return <Dice3 width={width} height={height} className={classes} />;
    case "Dice4":
      return <Dice4 width={width} height={height} className={classes} />;
    case "Dice5":
      return <Dice5 width={width} height={height} className={classes} />;
    case "Dice6":
      return <Dice6 width={width} height={height} className={classes} />;
    case "Disc":
      return <Disc width={width} height={height} className={classes} />;
    case "Discord":
      return <Discord width={width} height={height} className={classes} />;
    case "Display":
      return <Display width={width} height={height} className={classes} />;
    case "Displayport":
      return <Displayport width={width} height={height} className={classes} />;
    case "DistributeHorizontal":
      return (
        <DistributeHorizontal
          width={width}
          height={height}
          className={classes}
        />
      );
    case "DistributeVertical":
      return (
        <DistributeVertical width={width} height={height} className={classes} />
      );
    case "DoorClosed":
      return <DoorClosed width={width} height={height} className={classes} />;
    case "DoorOpen":
      return <DoorOpen width={width} height={height} className={classes} />;
    case "Dot":
      return <Dot width={width} height={height} className={classes} />;
    case "Download":
      return <Download width={width} height={height} className={classes} />;
    case "Dpad":
      return <Dpad width={width} height={height} className={classes} />;
    case "Dribbble":
      return <Dribbble width={width} height={height} className={classes} />;
    case "Dropbox":
      return <Dropbox width={width} height={height} className={classes} />;
    case "Droplet":
      return <Droplet width={width} height={height} className={classes} />;
    case "Ear":
      return <Ear width={width} height={height} className={classes} />;
    case "Earbuds":
      return <Earbuds width={width} height={height} className={classes} />;
    case "Easel":
      return <Easel width={width} height={height} className={classes} />;
    case "Easel2":
      return <Easel2 width={width} height={height} className={classes} />;
    case "Easel3":
      return <Easel3 width={width} height={height} className={classes} />;
    case "EggFried":
      return <EggFried width={width} height={height} className={classes} />;
    case "Egg":
      return <Egg width={width} height={height} className={classes} />;
    case "Eject":
      return <Eject width={width} height={height} className={classes} />;
    case "EmojiAngry":
      return <EmojiAngry width={width} height={height} className={classes} />;
    case "EmojiDizzy":
      return <EmojiDizzy width={width} height={height} className={classes} />;
    case "EmojiExpressionless":
      return (
        <EmojiExpressionless
          width={width}
          height={height}
          className={classes}
        />
      );
    case "EmojiFrown":
      return <EmojiFrown width={width} height={height} className={classes} />;
    case "EmojiHeartEyes":
      return (
        <EmojiHeartEyes width={width} height={height} className={classes} />
      );
    case "EmojiKiss":
      return <EmojiKiss width={width} height={height} className={classes} />;
    case "EmojiLaughing":
      return (
        <EmojiLaughing width={width} height={height} className={classes} />
      );
    case "EmojiNeutral":
      return <EmojiNeutral width={width} height={height} className={classes} />;
    case "EmojiSmileUpsideDown":
      return (
        <EmojiSmileUpsideDown
          width={width}
          height={height}
          className={classes}
        />
      );
    case "EmojiSmile":
      return <EmojiSmile width={width} height={height} className={classes} />;
    case "EmojiSunglasses":
      return (
        <EmojiSunglasses width={width} height={height} className={classes} />
      );
    case "EmojiWink":
      return <EmojiWink width={width} height={height} className={classes} />;
    case "EnvelopeAt":
      return <EnvelopeAt width={width} height={height} className={classes} />;
    case "EnvelopeCheck":
      return (
        <EnvelopeCheck width={width} height={height} className={classes} />
      );
    case "EnvelopeDash":
      return <EnvelopeDash width={width} height={height} className={classes} />;
    case "EnvelopeExclamation":
      return (
        <EnvelopeExclamation
          width={width}
          height={height}
          className={classes}
        />
      );
    case "EnvelopeHeart":
      return (
        <EnvelopeHeart width={width} height={height} className={classes} />
      );
    case "EnvelopeOpenHeart":
      return (
        <EnvelopeOpenHeart width={width} height={height} className={classes} />
      );
    case "EnvelopeOpen":
      return <EnvelopeOpen width={width} height={height} className={classes} />;
    case "EnvelopePaperHeart":
      return (
        <EnvelopePaperHeart width={width} height={height} className={classes} />
      );
    case "EnvelopePaper":
      return (
        <EnvelopePaper width={width} height={height} className={classes} />
      );
    case "EnvelopePlus":
      return <EnvelopePlus width={width} height={height} className={classes} />;
    case "EnvelopeSlash":
      return (
        <EnvelopeSlash width={width} height={height} className={classes} />
      );
    case "EnvelopeX":
      return <EnvelopeX width={width} height={height} className={classes} />;
    case "Envelope":
      return <Envelope width={width} height={height} className={classes} />;
    case "Eraser":
      return <Eraser width={width} height={height} className={classes} />;
    case "Escape":
      return <Escape width={width} height={height} className={classes} />;
    case "Ethernet":
      return <Ethernet width={width} height={height} className={classes} />;
    case "EvFront":
      return <EvFront width={width} height={height} className={classes} />;
    case "EvStation":
      return <EvStation width={width} height={height} className={classes} />;
    case "ExclamationCircle":
      return (
        <ExclamationCircle width={width} height={height} className={classes} />
      );
    case "ExclamationDiamond":
      return (
        <ExclamationDiamond width={width} height={height} className={classes} />
      );
    case "ExclamationLg":
      return (
        <ExclamationLg width={width} height={height} className={classes} />
      );
    case "ExclamationOctagon":
      return (
        <ExclamationOctagon width={width} height={height} className={classes} />
      );
    case "ExclamationSquare":
      return (
        <ExclamationSquare width={width} height={height} className={classes} />
      );
    case "ExclamationTriangle":
      return (
        <ExclamationTriangle
          width={width}
          height={height}
          className={classes}
        />
      );
    case "Exclamation":
      return <Exclamation width={width} height={height} className={classes} />;
    case "Exclude":
      return <Exclude width={width} height={height} className={classes} />;
    case "Explicit":
      return <Explicit width={width} height={height} className={classes} />;
    case "EyeSlash":
      return <EyeSlash width={width} height={height} className={classes} />;
    case "Eye":
      return <Eye width={width} height={height} className={classes} />;
    case "Eyedropper":
      return <Eyedropper width={width} height={height} className={classes} />;
    case "Eyeglasses":
      return <Eyeglasses width={width} height={height} className={classes} />;
    case "Facebook":
      return <Facebook width={width} height={height} className={classes} />;
    case "Fan":
      return <Fan width={width} height={height} className={classes} />;
    case "FastForwardBtn":
      return (
        <FastForwardBtn width={width} height={height} className={classes} />
      );
    case "FastForwardCircle":
      return (
        <FastForwardCircle width={width} height={height} className={classes} />
      );
    case "FastForward":
      return <FastForward width={width} height={height} className={classes} />;
    case "FileArrowDown":
      return (
        <FileArrowDown width={width} height={height} className={classes} />
      );
    case "FileArrowUp":
      return <FileArrowUp width={width} height={height} className={classes} />;
    case "FileBarGraph":
      return <FileBarGraph width={width} height={height} className={classes} />;
    case "FileBinary":
      return <FileBinary width={width} height={height} className={classes} />;
    case "FileBreak":
      return <FileBreak width={width} height={height} className={classes} />;
    case "FileCheck":
      return <FileCheck width={width} height={height} className={classes} />;
    case "FileCode":
      return <FileCode width={width} height={height} className={classes} />;
    case "FileDiff":
      return <FileDiff width={width} height={height} className={classes} />;
    case "FileEarmarkArrowDown":
      return (
        <FileEarmarkArrowDown
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkArrowUp":
      return (
        <FileEarmarkArrowUp width={width} height={height} className={classes} />
      );
    case "FileEarmarkBarGraph":
      return (
        <FileEarmarkBarGraph
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkBinary":
      return (
        <FileEarmarkBinary width={width} height={height} className={classes} />
      );
    case "FileEarmarkBreak":
      return (
        <FileEarmarkBreak width={width} height={height} className={classes} />
      );
    case "FileEarmarkCheck":
      return (
        <FileEarmarkCheck width={width} height={height} className={classes} />
      );
    case "FileEarmarkCode":
      return (
        <FileEarmarkCode width={width} height={height} className={classes} />
      );
    case "FileEarmarkDiff":
      return (
        <FileEarmarkDiff width={width} height={height} className={classes} />
      );
    case "FileEarmarkEasel":
      return (
        <FileEarmarkEasel width={width} height={height} className={classes} />
      );
    case "FileEarmarkExcel":
      return (
        <FileEarmarkExcel width={width} height={height} className={classes} />
      );
    case "FileEarmarkFont":
      return (
        <FileEarmarkFont width={width} height={height} className={classes} />
      );
    case "FileEarmarkImage":
      return (
        <FileEarmarkImage width={width} height={height} className={classes} />
      );
    case "FileEarmarkLock":
      return (
        <FileEarmarkLock width={width} height={height} className={classes} />
      );
    case "FileEarmarkLock2":
      return (
        <FileEarmarkLock2 width={width} height={height} className={classes} />
      );
    case "FileEarmarkMedical":
      return (
        <FileEarmarkMedical width={width} height={height} className={classes} />
      );
    case "FileEarmarkMinus":
      return (
        <FileEarmarkMinus width={width} height={height} className={classes} />
      );
    case "FileEarmarkMusic":
      return (
        <FileEarmarkMusic width={width} height={height} className={classes} />
      );
    case "FileEarmarkPdf":
      return (
        <FileEarmarkPdf width={width} height={height} className={classes} />
      );
    case "FileEarmarkPerson":
      return (
        <FileEarmarkPerson width={width} height={height} className={classes} />
      );
    case "FileEarmarkPlay":
      return (
        <FileEarmarkPlay width={width} height={height} className={classes} />
      );
    case "FileEarmarkPlus":
      return (
        <FileEarmarkPlus width={width} height={height} className={classes} />
      );
    case "FileEarmarkPost":
      return (
        <FileEarmarkPost width={width} height={height} className={classes} />
      );
    case "FileEarmarkPpt":
      return (
        <FileEarmarkPpt width={width} height={height} className={classes} />
      );
    case "FileEarmarkRichtext":
      return (
        <FileEarmarkRichtext
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkRuled":
      return (
        <FileEarmarkRuled width={width} height={height} className={classes} />
      );
    case "FileEarmarkSlides":
      return (
        <FileEarmarkSlides width={width} height={height} className={classes} />
      );
    case "FileEarmarkSpreadsheet":
      return (
        <FileEarmarkSpreadsheet
          width={width}
          height={height}
          className={classes}
        />
      );
    case "FileEarmarkText":
      return (
        <FileEarmarkText width={width} height={height} className={classes} />
      );
    case "FileEarmarkWord":
      return (
        <FileEarmarkWord width={width} height={height} className={classes} />
      );
    case "FileEarmarkX":
      return <FileEarmarkX width={width} height={height} className={classes} />;
    case "FileEarmarkZip":
      return (
        <FileEarmarkZip width={width} height={height} className={classes} />
      );
    case "FileEarmark":
      return <FileEarmark width={width} height={height} className={classes} />;
    case "FileEasel":
      return <FileEasel width={width} height={height} className={classes} />;
    case "FileExcel":
      return <FileExcel width={width} height={height} className={classes} />;
    case "FileFont":
      return <FileFont width={width} height={height} className={classes} />;
    case "FileImage":
      return <FileImage width={width} height={height} className={classes} />;
    case "FileLock":
      return <FileLock width={width} height={height} className={classes} />;
    case "FileLock2":
      return <FileLock2 width={width} height={height} className={classes} />;
    case "FileMedical":
      return <FileMedical width={width} height={height} className={classes} />;
    case "FileMinus":
      return <FileMinus width={width} height={height} className={classes} />;
    case "FileMusic":
      return <FileMusic width={width} height={height} className={classes} />;
    case "FilePdf":
      return <FilePdf width={width} height={height} className={classes} />;
    case "FilePerson":
      return <FilePerson width={width} height={height} className={classes} />;
    case "FilePlay":
      return <FilePlay width={width} height={height} className={classes} />;
    case "FilePlus":
      return <FilePlus width={width} height={height} className={classes} />;
    case "FilePost":
      return <FilePost width={width} height={height} className={classes} />;
    case "FilePpt":
      return <FilePpt width={width} height={height} className={classes} />;
    case "FileRichtext":
      return <FileRichtext width={width} height={height} className={classes} />;
    case "FileRuled":
      return <FileRuled width={width} height={height} className={classes} />;
    case "FileSlides":
      return <FileSlides width={width} height={height} className={classes} />;
    case "FileSpreadsheet":
      return (
        <FileSpreadsheet width={width} height={height} className={classes} />
      );
    case "FileText":
      return <FileText width={width} height={height} className={classes} />;
    case "FileWord":
      return <FileWord width={width} height={height} className={classes} />;
    case "FileX":
      return <FileX width={width} height={height} className={classes} />;
    case "FileZip":
      return <FileZip width={width} height={height} className={classes} />;
    case "File":
      return <File width={width} height={height} className={classes} />;
    case "FilesAlt":
      return <FilesAlt width={width} height={height} className={classes} />;
    case "Files":
      return <Files width={width} height={height} className={classes} />;
    case "FiletypeAac":
      return <FiletypeAac width={width} height={height} className={classes} />;
    case "FiletypeAi":
      return <FiletypeAi width={width} height={height} className={classes} />;
    case "FiletypeBmp":
      return <FiletypeBmp width={width} height={height} className={classes} />;
    case "FiletypeCs":
      return <FiletypeCs width={width} height={height} className={classes} />;
    case "FiletypeCss":
      return <FiletypeCss width={width} height={height} className={classes} />;
    case "FiletypeCsv":
      return <FiletypeCsv width={width} height={height} className={classes} />;
    case "FiletypeDoc":
      return <FiletypeDoc width={width} height={height} className={classes} />;
    case "FiletypeDocx":
      return <FiletypeDocx width={width} height={height} className={classes} />;
    case "FiletypeExe":
      return <FiletypeExe width={width} height={height} className={classes} />;
    case "FiletypeGif":
      return <FiletypeGif width={width} height={height} className={classes} />;
    case "FiletypeHeic":
      return <FiletypeHeic width={width} height={height} className={classes} />;
    case "FiletypeHtml":
      return <FiletypeHtml width={width} height={height} className={classes} />;
    case "FiletypeJava":
      return <FiletypeJava width={width} height={height} className={classes} />;
    case "FiletypeJpg":
      return <FiletypeJpg width={width} height={height} className={classes} />;
    case "FiletypeJs":
      return <FiletypeJs width={width} height={height} className={classes} />;
    case "FiletypeJson":
      return <FiletypeJson width={width} height={height} className={classes} />;
    case "FiletypeJsx":
      return <FiletypeJsx width={width} height={height} className={classes} />;
    case "FiletypeKey":
      return <FiletypeKey width={width} height={height} className={classes} />;
    case "FiletypeM4p":
      return <FiletypeM4p width={width} height={height} className={classes} />;
    case "FiletypeMd":
      return <FiletypeMd width={width} height={height} className={classes} />;
    case "FiletypeMdx":
      return <FiletypeMdx width={width} height={height} className={classes} />;
    case "FiletypeMov":
      return <FiletypeMov width={width} height={height} className={classes} />;
    case "FiletypeMp3":
      return <FiletypeMp3 width={width} height={height} className={classes} />;
    case "FiletypeMp4":
      return <FiletypeMp4 width={width} height={height} className={classes} />;
    case "FiletypeOtf":
      return <FiletypeOtf width={width} height={height} className={classes} />;
    case "FiletypePdf":
      return <FiletypePdf width={width} height={height} className={classes} />;
    case "FiletypePhp":
      return <FiletypePhp width={width} height={height} className={classes} />;
    case "FiletypePng":
      return <FiletypePng width={width} height={height} className={classes} />;
    case "FiletypePpt":
      return <FiletypePpt width={width} height={height} className={classes} />;
    case "FiletypePptx":
      return <FiletypePptx width={width} height={height} className={classes} />;
    case "FiletypePsd":
      return <FiletypePsd width={width} height={height} className={classes} />;
    case "FiletypePy":
      return <FiletypePy width={width} height={height} className={classes} />;
    case "FiletypeRaw":
      return <FiletypeRaw width={width} height={height} className={classes} />;
    case "FiletypeRb":
      return <FiletypeRb width={width} height={height} className={classes} />;
    case "FiletypeSass":
      return <FiletypeSass width={width} height={height} className={classes} />;
    case "FiletypeScss":
      return <FiletypeScss width={width} height={height} className={classes} />;
    case "FiletypeSh":
      return <FiletypeSh width={width} height={height} className={classes} />;
    case "FiletypeSql":
      return <FiletypeSql width={width} height={height} className={classes} />;
    case "FiletypeTiff":
      return <FiletypeTiff width={width} height={height} className={classes} />;
    case "FiletypeTsx":
      return <FiletypeTsx width={width} height={height} className={classes} />;
    case "FiletypeTtf":
      return <FiletypeTtf width={width} height={height} className={classes} />;
    case "FiletypeTxt":
      return <FiletypeTxt width={width} height={height} className={classes} />;
    case "FiletypeWav":
      return <FiletypeWav width={width} height={height} className={classes} />;
    case "FiletypeWoff":
      return <FiletypeWoff width={width} height={height} className={classes} />;
    case "FiletypeXls":
      return <FiletypeXls width={width} height={height} className={classes} />;
    case "FiletypeXlsx":
      return <FiletypeXlsx width={width} height={height} className={classes} />;
    case "FiletypeXml":
      return <FiletypeXml width={width} height={height} className={classes} />;
    case "FiletypeYml":
      return <FiletypeYml width={width} height={height} className={classes} />;
    case "Film":
      return <Film width={width} height={height} className={classes} />;
    case "FilterCircle":
      return <FilterCircle width={width} height={height} className={classes} />;
    case "FilterLeft":
      return <FilterLeft width={width} height={height} className={classes} />;
    case "FilterRight":
      return <FilterRight width={width} height={height} className={classes} />;
    case "FilterSquare":
      return <FilterSquare width={width} height={height} className={classes} />;
    case "Filter":
      return <Filter width={width} height={height} className={classes} />;
    case "Fingerprint":
      return <Fingerprint width={width} height={height} className={classes} />;
    case "Fire":
      return <Fire width={width} height={height} className={classes} />;
    case "Flag":
      return <Flag width={width} height={height} className={classes} />;
    case "Flower1":
      return <Flower1 width={width} height={height} className={classes} />;
    case "Flower2":
      return <Flower2 width={width} height={height} className={classes} />;
    case "Flower3":
      return <Flower3 width={width} height={height} className={classes} />;
    case "FolderCheck":
      return <FolderCheck width={width} height={height} className={classes} />;
    case "FolderMinus":
      return <FolderMinus width={width} height={height} className={classes} />;
    case "FolderPlus":
      return <FolderPlus width={width} height={height} className={classes} />;
    case "FolderSymlink":
      return (
        <FolderSymlink width={width} height={height} className={classes} />
      );
    case "FolderX":
      return <FolderX width={width} height={height} className={classes} />;
    case "Folder":
      return <Folder width={width} height={height} className={classes} />;
    case "Folder2Open":
      return <Folder2Open width={width} height={height} className={classes} />;
    case "Folder2":
      return <Folder2 width={width} height={height} className={classes} />;
    case "Fonts":
      return <Fonts width={width} height={height} className={classes} />;
    case "Forward":
      return <Forward width={width} height={height} className={classes} />;
    case "Front":
      return <Front width={width} height={height} className={classes} />;
    case "FuelPumpDiesel":
      return (
        <FuelPumpDiesel width={width} height={height} className={classes} />
      );
    case "FuelPump":
      return <FuelPump width={width} height={height} className={classes} />;
    case "FullscreenExit":
      return (
        <FullscreenExit width={width} height={height} className={classes} />
      );
    case "Fullscreen":
      return <Fullscreen width={width} height={height} className={classes} />;
    case "Funnel":
      return <Funnel width={width} height={height} className={classes} />;
    case "GearWideConnected":
      return (
        <GearWideConnected width={width} height={height} className={classes} />
      );
    case "GearWide":
      return <GearWide width={width} height={height} className={classes} />;
    case "Gear":
      return <Gear width={width} height={height} className={classes} />;
    case "Gem":
      return <Gem width={width} height={height} className={classes} />;
    case "GenderAmbiguous":
      return (
        <GenderAmbiguous width={width} height={height} className={classes} />
      );
    case "GenderFemale":
      return <GenderFemale width={width} height={height} className={classes} />;
    case "GenderMale":
      return <GenderMale width={width} height={height} className={classes} />;
    case "GenderTrans":
      return <GenderTrans width={width} height={height} className={classes} />;
    case "GeoAlt":
      return <GeoAlt width={width} height={height} className={classes} />;
    case "Geo":
      return <Geo width={width} height={height} className={classes} />;
    case "Gift":
      return <Gift width={width} height={height} className={classes} />;
    case "Git":
      return <Git width={width} height={height} className={classes} />;
    case "Github":
      return <Github width={width} height={height} className={classes} />;
    case "GlobeAmericas":
      return (
        <GlobeAmericas width={width} height={height} className={classes} />
      );
    case "GlobeAsiaAustralia":
      return (
        <GlobeAsiaAustralia width={width} height={height} className={classes} />
      );
    case "GlobeCentralSouthAsia":
      return (
        <GlobeCentralSouthAsia
          width={width}
          height={height}
          className={classes}
        />
      );
    case "GlobeEuropeAfrica":
      return (
        <GlobeEuropeAfrica width={width} height={height} className={classes} />
      );
    case "Globe":
      return <Globe width={width} height={height} className={classes} />;
    case "Globe2":
      return <Globe2 width={width} height={height} className={classes} />;
    case "GooglePlay":
      return <GooglePlay width={width} height={height} className={classes} />;
    case "Google":
      return <Google width={width} height={height} className={classes} />;
    case "GpuCard":
      return <GpuCard width={width} height={height} className={classes} />;
    case "GraphDownArrow":
      return (
        <GraphDownArrow width={width} height={height} className={classes} />
      );
    case "GraphDown":
      return <GraphDown width={width} height={height} className={classes} />;
    case "GraphUpArrow":
      return <GraphUpArrow width={width} height={height} className={classes} />;
    case "GraphUp":
      return <GraphUp width={width} height={height} className={classes} />;
    case "Grid1x2":
      return <Grid1x2 width={width} height={height} className={classes} />;
    case "Grid3x2Gap":
      return <Grid3x2Gap width={width} height={height} className={classes} />;
    case "Grid3x2":
      return <Grid3x2 width={width} height={height} className={classes} />;
    case "Grid3x3Gap":
      return <Grid3x3Gap width={width} height={height} className={classes} />;
    case "Grid3x3":
      return <Grid3x3 width={width} height={height} className={classes} />;
    case "Grid":
      return <Grid width={width} height={height} className={classes} />;
    case "GripHorizontal":
      return (
        <GripHorizontal width={width} height={height} className={classes} />
      );
    case "GripVertical":
      return <GripVertical width={width} height={height} className={classes} />;
    case "HCircle":
      return <HCircle width={width} height={height} className={classes} />;
    case "HSquare":
      return <HSquare width={width} height={height} className={classes} />;
    case "Hammer":
      return <Hammer width={width} height={height} className={classes} />;
    case "HandIndexThumb":
      return (
        <HandIndexThumb width={width} height={height} className={classes} />
      );
    case "HandIndex":
      return <HandIndex width={width} height={height} className={classes} />;
    case "HandThumbsDown":
      return (
        <HandThumbsDown width={width} height={height} className={classes} />
      );
    case "HandThumbsUp":
      return <HandThumbsUp width={width} height={height} className={classes} />;
    case "Handbag":
      return <Handbag width={width} height={height} className={classes} />;
    case "Hash":
      return <Hash width={width} height={height} className={classes} />;
    case "HddNetwork":
      return <HddNetwork width={width} height={height} className={classes} />;
    case "HddRack":
      return <HddRack width={width} height={height} className={classes} />;
    case "HddStack":
      return <HddStack width={width} height={height} className={classes} />;
    case "Hdd":
      return <Hdd width={width} height={height} className={classes} />;
    case "Hdmi":
      return <Hdmi width={width} height={height} className={classes} />;
    case "Headphones":
      return <Headphones width={width} height={height} className={classes} />;
    case "HeadsetVr":
      return <HeadsetVr width={width} height={height} className={classes} />;
    case "Headset":
      return <Headset width={width} height={height} className={classes} />;
    case "HeartArrow":
      return <HeartArrow width={width} height={height} className={classes} />;
    case "HeartPulse":
      return <HeartPulse width={width} height={height} className={classes} />;
    case "Heart":
      return <Heart width={width} height={height} className={classes} />;
    case "Heartbreak":
      return <Heartbreak width={width} height={height} className={classes} />;
    case "Hearts":
      return <Hearts width={width} height={height} className={classes} />;
    case "Heptagon":
      return <Heptagon width={width} height={height} className={classes} />;
    case "Hexagon":
      return <Hexagon width={width} height={height} className={classes} />;
    case "Hospital":
      return <Hospital width={width} height={height} className={classes} />;
    case "HourglassBottom":
      return (
        <HourglassBottom width={width} height={height} className={classes} />
      );
    case "HourglassSplit":
      return (
        <HourglassSplit width={width} height={height} className={classes} />
      );
    case "HourglassTop":
      return <HourglassTop width={width} height={height} className={classes} />;
    case "Hourglass":
      return <Hourglass width={width} height={height} className={classes} />;
    case "HouseAdd":
      return <HouseAdd width={width} height={height} className={classes} />;
    case "HouseCheck":
      return <HouseCheck width={width} height={height} className={classes} />;
    case "HouseDash":
      return <HouseDash width={width} height={height} className={classes} />;
    case "HouseDoor":
      return <HouseDoor width={width} height={height} className={classes} />;
    case "HouseDown":
      return <HouseDown width={width} height={height} className={classes} />;
    case "HouseExclamation":
      return (
        <HouseExclamation width={width} height={height} className={classes} />
      );
    case "HouseGear":
      return <HouseGear width={width} height={height} className={classes} />;
    case "HouseHeart":
      return <HouseHeart width={width} height={height} className={classes} />;
    case "HouseLock":
      return <HouseLock width={width} height={height} className={classes} />;
    case "HouseSlash":
      return <HouseSlash width={width} height={height} className={classes} />;
    case "HouseUp":
      return <HouseUp width={width} height={height} className={classes} />;
    case "HouseX":
      return <HouseX width={width} height={height} className={classes} />;
    case "House":
      return <House width={width} height={height} className={classes} />;
    case "Houses":
      return <Houses width={width} height={height} className={classes} />;
    case "Hr":
      return <Hr width={width} height={height} className={classes} />;
    case "Hurricane":
      return <Hurricane width={width} height={height} className={classes} />;
    case "Hypnotize":
      return <Hypnotize width={width} height={height} className={classes} />;
    case "ImageAlt":
      return <ImageAlt width={width} height={height} className={classes} />;
    case "Image":
      return <Image width={width} height={height} className={classes} />;
    case "Images":
      return <Images width={width} height={height} className={classes} />;
    case "Inbox":
      return <Inbox width={width} height={height} className={classes} />;
    case "Inboxes":
      return <Inboxes width={width} height={height} className={classes} />;
    case "Incognito":
      return <Incognito width={width} height={height} className={classes} />;
    case "Indent":
      return <Indent width={width} height={height} className={classes} />;
    case "Infinity":
      return <Infinity width={width} height={height} className={classes} />;
    case "InfoCircle":
      return <InfoCircle width={width} height={height} className={classes} />;
    case "InfoLg":
      return <InfoLg width={width} height={height} className={classes} />;
    case "InfoSquare":
      return <InfoSquare width={width} height={height} className={classes} />;
    case "Info":
      return <Info width={width} height={height} className={classes} />;
    case "InputCursorText":
      return (
        <InputCursorText width={width} height={height} className={classes} />
      );
    case "InputCursor":
      return <InputCursor width={width} height={height} className={classes} />;
    case "Instagram":
      return <Instagram width={width} height={height} className={classes} />;
    case "Intersect":
      return <Intersect width={width} height={height} className={classes} />;
    case "JournalAlbum":
      return <JournalAlbum width={width} height={height} className={classes} />;
    case "JournalArrowDown":
      return (
        <JournalArrowDown width={width} height={height} className={classes} />
      );
    case "JournalArrowUp":
      return (
        <JournalArrowUp width={width} height={height} className={classes} />
      );
    case "JournalBookmark":
      return (
        <JournalBookmark width={width} height={height} className={classes} />
      );
    case "JournalCheck":
      return <JournalCheck width={width} height={height} className={classes} />;
    case "JournalCode":
      return <JournalCode width={width} height={height} className={classes} />;
    case "JournalMedical":
      return (
        <JournalMedical width={width} height={height} className={classes} />
      );
    case "JournalMinus":
      return <JournalMinus width={width} height={height} className={classes} />;
    case "JournalPlus":
      return <JournalPlus width={width} height={height} className={classes} />;
    case "JournalRichtext":
      return (
        <JournalRichtext width={width} height={height} className={classes} />
      );
    case "JournalText":
      return <JournalText width={width} height={height} className={classes} />;
    case "JournalX":
      return <JournalX width={width} height={height} className={classes} />;
    case "Journal":
      return <Journal width={width} height={height} className={classes} />;
    case "Journals":
      return <Journals width={width} height={height} className={classes} />;
    case "Joystick":
      return <Joystick width={width} height={height} className={classes} />;
    case "JustifyLeft":
      return <JustifyLeft width={width} height={height} className={classes} />;
    case "JustifyRight":
      return <JustifyRight width={width} height={height} className={classes} />;
    case "Justify":
      return <Justify width={width} height={height} className={classes} />;
    case "Kanban":
      return <Kanban width={width} height={height} className={classes} />;
    case "Key":
      return <Key width={width} height={height} className={classes} />;
    case "Keyboard":
      return <Keyboard width={width} height={height} className={classes} />;
    case "Ladder":
      return <Ladder width={width} height={height} className={classes} />;
    case "Lamp":
      return <Lamp width={width} height={height} className={classes} />;
    case "Laptop":
      return <Laptop width={width} height={height} className={classes} />;
    case "LayerBackward":
      return (
        <LayerBackward width={width} height={height} className={classes} />
      );
    case "LayerForward":
      return <LayerForward width={width} height={height} className={classes} />;
    case "Layers":
      return <Layers width={width} height={height} className={classes} />;
    case "LayoutSidebarInsetReverse":
      return (
        <LayoutSidebarInsetReverse
          width={width}
          height={height}
          className={classes}
        />
      );
    case "LayoutSidebarInset":
      return (
        <LayoutSidebarInset width={width} height={height} className={classes} />
      );
    case "LayoutSidebarReverse":
      return (
        <LayoutSidebarReverse
          width={width}
          height={height}
          className={classes}
        />
      );
    case "LayoutSidebar":
      return (
        <LayoutSidebar width={width} height={height} className={classes} />
      );
    case "LayoutSplit":
      return <LayoutSplit width={width} height={height} className={classes} />;
    case "LayoutTextSidebarReverse":
      return (
        <LayoutTextSidebarReverse
          width={width}
          height={height}
          className={classes}
        />
      );
    case "LayoutTextSidebar":
      return (
        <LayoutTextSidebar width={width} height={height} className={classes} />
      );
    case "LayoutTextWindowReverse":
      return (
        <LayoutTextWindowReverse
          width={width}
          height={height}
          className={classes}
        />
      );
    case "LayoutTextWindow":
      return (
        <LayoutTextWindow width={width} height={height} className={classes} />
      );
    case "LayoutThreeColumns":
      return (
        <LayoutThreeColumns width={width} height={height} className={classes} />
      );
    case "LayoutWtf":
      return <LayoutWtf width={width} height={height} className={classes} />;
    case "LifePreserver":
      return (
        <LifePreserver width={width} height={height} className={classes} />
      );
    case "LightbulbOff":
      return <LightbulbOff width={width} height={height} className={classes} />;
    case "Lightbulb":
      return <Lightbulb width={width} height={height} className={classes} />;
    case "LightningCharge":
      return (
        <LightningCharge width={width} height={height} className={classes} />
      );
    case "Lightning":
      return <Lightning width={width} height={height} className={classes} />;
    case "Line":
      return <Line width={width} height={height} className={classes} />;
    case "Link45deg":
      return <Link45deg width={width} height={height} className={classes} />;
    case "Link":
      return <Link width={width} height={height} className={classes} />;
    case "Linkedin":
      return <Linkedin width={width} height={height} className={classes} />;
    case "ListCheck":
      return <ListCheck width={width} height={height} className={classes} />;
    case "ListColumnsReverse":
      return (
        <ListColumnsReverse width={width} height={height} className={classes} />
      );
    case "ListColumns":
      return <ListColumns width={width} height={height} className={classes} />;
    case "ListNested":
      return <ListNested width={width} height={height} className={classes} />;
    case "ListOl":
      return <ListOl width={width} height={height} className={classes} />;
    case "ListStars":
      return <ListStars width={width} height={height} className={classes} />;
    case "ListTask":
      return <ListTask width={width} height={height} className={classes} />;
    case "ListUl":
      return <ListUl width={width} height={height} className={classes} />;
    case "List":
      return <List width={width} height={height} className={classes} />;
    case "Lock":
      return <Lock width={width} height={height} className={classes} />;
    case "Lungs":
      return <Lungs width={width} height={height} className={classes} />;
    case "Magic":
      return <Magic width={width} height={height} className={classes} />;
    case "Magnet":
      return <Magnet width={width} height={height} className={classes} />;
    case "Mailbox":
      return <Mailbox width={width} height={height} className={classes} />;
    case "Mailbox2":
      return <Mailbox2 width={width} height={height} className={classes} />;
    case "Map":
      return <Map width={width} height={height} className={classes} />;
    case "Markdown":
      return <Markdown width={width} height={height} className={classes} />;
    case "Mask":
      return <Mask width={width} height={height} className={classes} />;
    case "Mastodon":
      return <Mastodon width={width} height={height} className={classes} />;
    case "Medium":
      return <Medium width={width} height={height} className={classes} />;
    case "Megaphone":
      return <Megaphone width={width} height={height} className={classes} />;
    case "Memory":
      return <Memory width={width} height={height} className={classes} />;
    case "MenuApp":
      return <MenuApp width={width} height={height} className={classes} />;
    case "MenuButtonWide":
      return (
        <MenuButtonWide width={width} height={height} className={classes} />
      );
    case "MenuButton":
      return <MenuButton width={width} height={height} className={classes} />;
    case "MenuDown":
      return <MenuDown width={width} height={height} className={classes} />;
    case "MenuUp":
      return <MenuUp width={width} height={height} className={classes} />;
    case "Messenger":
      return <Messenger width={width} height={height} className={classes} />;
    case "Meta":
      return <Meta width={width} height={height} className={classes} />;
    case "MicMute":
      return <MicMute width={width} height={height} className={classes} />;
    case "Mic":
      return <Mic width={width} height={height} className={classes} />;
    case "MicrosoftTeams":
      return (
        <MicrosoftTeams width={width} height={height} className={classes} />
      );
    case "Microsoft":
      return <Microsoft width={width} height={height} className={classes} />;
    case "MinecartLoaded":
      return (
        <MinecartLoaded width={width} height={height} className={classes} />
      );
    case "Minecart":
      return <Minecart width={width} height={height} className={classes} />;
    case "Modem":
      return <Modem width={width} height={height} className={classes} />;
    case "Moisture":
      return <Moisture width={width} height={height} className={classes} />;
    case "MoonStars":
      return <MoonStars width={width} height={height} className={classes} />;
    case "Moon":
      return <Moon width={width} height={height} className={classes} />;
    case "Mortarboard":
      return <Mortarboard width={width} height={height} className={classes} />;
    case "Motherboard":
      return <Motherboard width={width} height={height} className={classes} />;
    case "Mouse":
      return <Mouse width={width} height={height} className={classes} />;
    case "Mouse2":
      return <Mouse2 width={width} height={height} className={classes} />;
    case "Mouse3":
      return <Mouse3 width={width} height={height} className={classes} />;
    case "MusicNoteBeamed":
      return (
        <MusicNoteBeamed width={width} height={height} className={classes} />
      );
    case "MusicNoteList":
      return (
        <MusicNoteList width={width} height={height} className={classes} />
      );
    case "MusicNote":
      return <MusicNote width={width} height={height} className={classes} />;
    case "MusicPlayer":
      return <MusicPlayer width={width} height={height} className={classes} />;
    case "Newspaper":
      return <Newspaper width={width} height={height} className={classes} />;
    case "NintendoSwitch":
      return (
        <NintendoSwitch width={width} height={height} className={classes} />
      );
    case "NodeMinus":
      return <NodeMinus width={width} height={height} className={classes} />;
    case "NodePlus":
      return <NodePlus width={width} height={height} className={classes} />;
    case "Nut":
      return <Nut width={width} height={height} className={classes} />;
    case "Nvidia":
      return <Nvidia width={width} height={height} className={classes} />;
    case "Octagon":
      return <Octagon width={width} height={height} className={classes} />;
    case "OpticalAudio":
      return <OpticalAudio width={width} height={height} className={classes} />;
    case "Option":
      return <Option width={width} height={height} className={classes} />;
    case "Outlet":
      return <Outlet width={width} height={height} className={classes} />;
    case "PCircle":
      return <PCircle width={width} height={height} className={classes} />;
    case "PSquare":
      return <PSquare width={width} height={height} className={classes} />;
    case "PaintBucket":
      return <PaintBucket width={width} height={height} className={classes} />;
    case "Palette":
      return <Palette width={width} height={height} className={classes} />;
    case "Palette2":
      return <Palette2 width={width} height={height} className={classes} />;
    case "Paperclip":
      return <Paperclip width={width} height={height} className={classes} />;
    case "Paragraph":
      return <Paragraph width={width} height={height} className={classes} />;
    case "Pass":
      return <Pass width={width} height={height} className={classes} />;
    case "PatchCheck":
      return <PatchCheck width={width} height={height} className={classes} />;
    case "PatchExclamation":
      return (
        <PatchExclamation width={width} height={height} className={classes} />
      );
    case "PatchMinus":
      return <PatchMinus width={width} height={height} className={classes} />;
    case "PatchPlus":
      return <PatchPlus width={width} height={height} className={classes} />;
    case "PatchQuestion":
      return (
        <PatchQuestion width={width} height={height} className={classes} />
      );
    case "PauseBtn":
      return <PauseBtn width={width} height={height} className={classes} />;
    case "PauseCircle":
      return <PauseCircle width={width} height={height} className={classes} />;
    case "Pause":
      return <Pause width={width} height={height} className={classes} />;
    case "Paypal":
      return <Paypal width={width} height={height} className={classes} />;
    case "PcDisplayHorizontal":
      return (
        <PcDisplayHorizontal
          width={width}
          height={height}
          className={classes}
        />
      );
    case "PcDisplay":
      return <PcDisplay width={width} height={height} className={classes} />;
    case "PcHorizontal":
      return <PcHorizontal width={width} height={height} className={classes} />;
    case "Pc":
      return <Pc width={width} height={height} className={classes} />;
    case "PciCard":
      return <PciCard width={width} height={height} className={classes} />;
    case "Peace":
      return <Peace width={width} height={height} className={classes} />;
    case "Pen":
      return <Pen width={width} height={height} className={classes} />;
    case "PencilSquare":
      return <PencilSquare width={width} height={height} className={classes} />;
    case "Pencil":
      return <Pencil width={width} height={height} className={classes} />;
    case "Pentagon":
      return <Pentagon width={width} height={height} className={classes} />;
    case "People":
      return <People width={width} height={height} className={classes} />;
    case "Percent":
      return <Percent width={width} height={height} className={classes} />;
    case "PersonAdd":
      return <PersonAdd width={width} height={height} className={classes} />;
    case "PersonBadge":
      return <PersonBadge width={width} height={height} className={classes} />;
    case "PersonBoundingBox":
      return (
        <PersonBoundingBox width={width} height={height} className={classes} />
      );
    case "PersonCheck":
      return <PersonCheck width={width} height={height} className={classes} />;
    case "PersonCircle":
      return <PersonCircle width={width} height={height} className={classes} />;
    case "PersonDash":
      return <PersonDash width={width} height={height} className={classes} />;
    case "PersonDown":
      return <PersonDown width={width} height={height} className={classes} />;
    case "PersonExclamation":
      return (
        <PersonExclamation width={width} height={height} className={classes} />
      );
    case "PersonGear":
      return <PersonGear width={width} height={height} className={classes} />;
    case "PersonHeart":
      return <PersonHeart width={width} height={height} className={classes} />;
    case "PersonHearts":
      return <PersonHearts width={width} height={height} className={classes} />;
    case "PersonLock":
      return <PersonLock width={width} height={height} className={classes} />;
    case "PersonPlus":
      return <PersonPlus width={width} height={height} className={classes} />;
    case "PersonRolodex":
      return (
        <PersonRolodex width={width} height={height} className={classes} />
      );
    case "PersonSlash":
      return <PersonSlash width={width} height={height} className={classes} />;
    case "PersonSquare":
      return <PersonSquare width={width} height={height} className={classes} />;
    case "PersonUp":
      return <PersonUp width={width} height={height} className={classes} />;
    case "PersonVcard":
      return <PersonVcard width={width} height={height} className={classes} />;
    case "PersonVideo":
      return <PersonVideo width={width} height={height} className={classes} />;
    case "PersonVideo2":
      return <PersonVideo2 width={width} height={height} className={classes} />;
    case "PersonVideo3":
      return <PersonVideo3 width={width} height={height} className={classes} />;
    case "PersonWorkspace":
      return (
        <PersonWorkspace width={width} height={height} className={classes} />
      );
    case "PersonX":
      return <PersonX width={width} height={height} className={classes} />;
    case "Person":
      return <Person width={width} height={height} className={classes} />;
    case "PhoneFlip":
      return <PhoneFlip width={width} height={height} className={classes} />;
    case "PhoneLandscape":
      return (
        <PhoneLandscape width={width} height={height} className={classes} />
      );
    case "PhoneVibrate":
      return <PhoneVibrate width={width} height={height} className={classes} />;
    case "Phone":
      return <Phone width={width} height={height} className={classes} />;
    case "PieChart":
      return <PieChart width={width} height={height} className={classes} />;
    case "PiggyBank":
      return <PiggyBank width={width} height={height} className={classes} />;
    case "PinAngle":
      return <PinAngle width={width} height={height} className={classes} />;
    case "PinMap":
      return <PinMap width={width} height={height} className={classes} />;
    case "Pin":
      return <Pin width={width} height={height} className={classes} />;
    case "Pinterest":
      return <Pinterest width={width} height={height} className={classes} />;
    case "Pip":
      return <Pip width={width} height={height} className={classes} />;
    case "PlayBtn":
      return <PlayBtn width={width} height={height} className={classes} />;
    case "PlayCircle":
      return <PlayCircle width={width} height={height} className={classes} />;
    case "Play":
      return <Play width={width} height={height} className={classes} />;
    case "Playstation":
      return <Playstation width={width} height={height} className={classes} />;
    case "Plug":
      return <Plug width={width} height={height} className={classes} />;
    case "Plugin":
      return <Plugin width={width} height={height} className={classes} />;
    case "PlusCircleDotted":
      return (
        <PlusCircleDotted width={width} height={height} className={classes} />
      );
    case "PlusCircle":
      return <PlusCircle width={width} height={height} className={classes} />;
    case "PlusLg":
      return <PlusLg width={width} height={height} className={classes} />;
    case "PlusSlashMinus":
      return (
        <PlusSlashMinus width={width} height={height} className={classes} />
      );
    case "PlusSquareDotted":
      return (
        <PlusSquareDotted width={width} height={height} className={classes} />
      );
    case "PlusSquare":
      return <PlusSquare width={width} height={height} className={classes} />;
    case "Plus":
      return <Plus width={width} height={height} className={classes} />;
    case "PostageHeart":
      return <PostageHeart width={width} height={height} className={classes} />;
    case "Postage":
      return <Postage width={width} height={height} className={classes} />;
    case "PostcardHeart":
      return (
        <PostcardHeart width={width} height={height} className={classes} />
      );
    case "Postcard":
      return <Postcard width={width} height={height} className={classes} />;
    case "Power":
      return <Power width={width} height={height} className={classes} />;
    case "Prescription":
      return <Prescription width={width} height={height} className={classes} />;
    case "Prescription2":
      return (
        <Prescription2 width={width} height={height} className={classes} />
      );
    case "Printer":
      return <Printer width={width} height={height} className={classes} />;
    case "Projector":
      return <Projector width={width} height={height} className={classes} />;
    case "Puzzle":
      return <Puzzle width={width} height={height} className={classes} />;
    case "QrCodeScan":
      return <QrCodeScan width={width} height={height} className={classes} />;
    case "QrCode":
      return <QrCode width={width} height={height} className={classes} />;
    case "QuestionCircle":
      return (
        <QuestionCircle width={width} height={height} className={classes} />
      );
    case "QuestionDiamond":
      return (
        <QuestionDiamond width={width} height={height} className={classes} />
      );
    case "QuestionLg":
      return <QuestionLg width={width} height={height} className={classes} />;
    case "QuestionOctagon":
      return (
        <QuestionOctagon width={width} height={height} className={classes} />
      );
    case "QuestionSquare":
      return (
        <QuestionSquare width={width} height={height} className={classes} />
      );
    case "Question":
      return <Question width={width} height={height} className={classes} />;
    case "Quora":
      return <Quora width={width} height={height} className={classes} />;
    case "Quote":
      return <Quote width={width} height={height} className={classes} />;
    case "RCircle":
      return <RCircle width={width} height={height} className={classes} />;
    case "RSquare":
      return <RSquare width={width} height={height} className={classes} />;
    case "Radioactive":
      return <Radioactive width={width} height={height} className={classes} />;
    case "Rainbow":
      return <Rainbow width={width} height={height} className={classes} />;
    case "ReceiptCutoff":
      return (
        <ReceiptCutoff width={width} height={height} className={classes} />
      );
    case "Receipt":
      return <Receipt width={width} height={height} className={classes} />;
    case "Reception0":
      return <Reception0 width={width} height={height} className={classes} />;
    case "Reception1":
      return <Reception1 width={width} height={height} className={classes} />;
    case "Reception2":
      return <Reception2 width={width} height={height} className={classes} />;
    case "Reception3":
      return <Reception3 width={width} height={height} className={classes} />;
    case "Reception4":
      return <Reception4 width={width} height={height} className={classes} />;
    case "RecordBtn":
      return <RecordBtn width={width} height={height} className={classes} />;
    case "RecordCircle":
      return <RecordCircle width={width} height={height} className={classes} />;
    case "Record":
      return <Record width={width} height={height} className={classes} />;
    case "Record2":
      return <Record2 width={width} height={height} className={classes} />;
    case "Recycle":
      return <Recycle width={width} height={height} className={classes} />;
    case "Reddit":
      return <Reddit width={width} height={height} className={classes} />;
    case "Regex":
      return <Regex width={width} height={height} className={classes} />;
    case "Repeat1":
      return <Repeat1 width={width} height={height} className={classes} />;
    case "Repeat":
      return <Repeat width={width} height={height} className={classes} />;
    case "ReplyAll":
      return <ReplyAll width={width} height={height} className={classes} />;
    case "Reply":
      return <Reply width={width} height={height} className={classes} />;
    case "RewindBtn":
      return <RewindBtn width={width} height={height} className={classes} />;
    case "RewindCircle":
      return <RewindCircle width={width} height={height} className={classes} />;
    case "Rewind":
      return <Rewind width={width} height={height} className={classes} />;
    case "Robot":
      return <Robot width={width} height={height} className={classes} />;
    case "RocketTakeoff":
      return (
        <RocketTakeoff width={width} height={height} className={classes} />
      );
    case "Rocket":
      return <Rocket width={width} height={height} className={classes} />;
    case "Router":
      return <Router width={width} height={height} className={classes} />;
    case "Rss":
      return <Rss width={width} height={height} className={classes} />;
    case "Rulers":
      return <Rulers width={width} height={height} className={classes} />;
    case "Safe":
      return <Safe width={width} height={height} className={classes} />;
    case "Safe2":
      return <Safe2 width={width} height={height} className={classes} />;
    case "Save":
      return <Save width={width} height={height} className={classes} />;
    case "Save2":
      return <Save2 width={width} height={height} className={classes} />;
    case "Scissors":
      return <Scissors width={width} height={height} className={classes} />;
    case "Scooter":
      return <Scooter width={width} height={height} className={classes} />;
    case "Screwdriver":
      return <Screwdriver width={width} height={height} className={classes} />;
    case "SdCard":
      return <SdCard width={width} height={height} className={classes} />;
    case "SearchHeart":
      return <SearchHeart width={width} height={height} className={classes} />;
    case "Search":
      return <Search width={width} height={height} className={classes} />;
    case "SegmentedNav":
      return <SegmentedNav width={width} height={height} className={classes} />;
    case "SendCheck":
      return <SendCheck width={width} height={height} className={classes} />;
    case "SendDash":
      return <SendDash width={width} height={height} className={classes} />;
    case "SendExclamation":
      return (
        <SendExclamation width={width} height={height} className={classes} />
      );
    case "SendPlus":
      return <SendPlus width={width} height={height} className={classes} />;
    case "SendSlash":
      return <SendSlash width={width} height={height} className={classes} />;
    case "SendX":
      return <SendX width={width} height={height} className={classes} />;
    case "Send":
      return <Send width={width} height={height} className={classes} />;
    case "Server":
      return <Server width={width} height={height} className={classes} />;
    case "Share":
      return <Share width={width} height={height} className={classes} />;
    case "ShieldCheck":
      return <ShieldCheck width={width} height={height} className={classes} />;
    case "ShieldExclamation":
      return (
        <ShieldExclamation width={width} height={height} className={classes} />
      );
    case "ShieldLock":
      return <ShieldLock width={width} height={height} className={classes} />;
    case "ShieldMinus":
      return <ShieldMinus width={width} height={height} className={classes} />;
    case "ShieldPlus":
      return <ShieldPlus width={width} height={height} className={classes} />;
    case "ShieldShaded":
      return <ShieldShaded width={width} height={height} className={classes} />;
    case "ShieldSlash":
      return <ShieldSlash width={width} height={height} className={classes} />;
    case "ShieldX":
      return <ShieldX width={width} height={height} className={classes} />;
    case "Shield":
      return <Shield width={width} height={height} className={classes} />;
    case "Shift":
      return <Shift width={width} height={height} className={classes} />;
    case "ShopWindow":
      return <ShopWindow width={width} height={height} className={classes} />;
    case "Shop":
      return <Shop width={width} height={height} className={classes} />;
    case "Shuffle":
      return <Shuffle width={width} height={height} className={classes} />;
    case "SignDeadEnd":
      return <SignDeadEnd width={width} height={height} className={classes} />;
    case "SignDoNotEnter":
      return (
        <SignDoNotEnter width={width} height={height} className={classes} />
      );
    case "SignIntersectionSide":
      return (
        <SignIntersectionSide
          width={width}
          height={height}
          className={classes}
        />
      );
    case "SignIntersectionT":
      return (
        <SignIntersectionT width={width} height={height} className={classes} />
      );
    case "SignIntersectionY":
      return (
        <SignIntersectionY width={width} height={height} className={classes} />
      );
    case "SignIntersection":
      return (
        <SignIntersection width={width} height={height} className={classes} />
      );
    case "SignMergeLeft":
      return (
        <SignMergeLeft width={width} height={height} className={classes} />
      );
    case "SignMergeRight":
      return (
        <SignMergeRight width={width} height={height} className={classes} />
      );
    case "SignNoLeftTurn":
      return (
        <SignNoLeftTurn width={width} height={height} className={classes} />
      );
    case "SignNoParking":
      return (
        <SignNoParking width={width} height={height} className={classes} />
      );
    case "SignNoRightTurn":
      return (
        <SignNoRightTurn width={width} height={height} className={classes} />
      );
    case "SignRailroad":
      return <SignRailroad width={width} height={height} className={classes} />;
    case "SignStopLights":
      return (
        <SignStopLights width={width} height={height} className={classes} />
      );
    case "SignStop":
      return <SignStop width={width} height={height} className={classes} />;
    case "SignTurnLeft":
      return <SignTurnLeft width={width} height={height} className={classes} />;
    case "SignTurnRight":
      return (
        <SignTurnRight width={width} height={height} className={classes} />
      );
    case "SignTurnSlightLeft":
      return (
        <SignTurnSlightLeft width={width} height={height} className={classes} />
      );
    case "SignTurnSlightRight":
      return (
        <SignTurnSlightRight
          width={width}
          height={height}
          className={classes}
        />
      );
    case "SignYield":
      return <SignYield width={width} height={height} className={classes} />;
    case "Signal":
      return <Signal width={width} height={height} className={classes} />;
    case "Signpost2":
      return <Signpost2 width={width} height={height} className={classes} />;
    case "SignpostSplit":
      return (
        <SignpostSplit width={width} height={height} className={classes} />
      );
    case "Signpost":
      return <Signpost width={width} height={height} className={classes} />;
    case "Sim":
      return <Sim width={width} height={height} className={classes} />;
    case "SinaWeibo":
      return <SinaWeibo width={width} height={height} className={classes} />;
    case "SkipBackwardBtn":
      return (
        <SkipBackwardBtn width={width} height={height} className={classes} />
      );
    case "SkipBackwardCircle":
      return (
        <SkipBackwardCircle width={width} height={height} className={classes} />
      );
    case "SkipBackward":
      return <SkipBackward width={width} height={height} className={classes} />;
    case "SkipEndBtn":
      return <SkipEndBtn width={width} height={height} className={classes} />;
    case "SkipEndCircle":
      return (
        <SkipEndCircle width={width} height={height} className={classes} />
      );
    case "SkipEnd":
      return <SkipEnd width={width} height={height} className={classes} />;
    case "SkipForwardBtn":
      return (
        <SkipForwardBtn width={width} height={height} className={classes} />
      );
    case "SkipForwardCircle":
      return (
        <SkipForwardCircle width={width} height={height} className={classes} />
      );
    case "SkipForward":
      return <SkipForward width={width} height={height} className={classes} />;
    case "SkipStartBtn":
      return <SkipStartBtn width={width} height={height} className={classes} />;
    case "SkipStartCircle":
      return (
        <SkipStartCircle width={width} height={height} className={classes} />
      );
    case "SkipStart":
      return <SkipStart width={width} height={height} className={classes} />;
    case "Skype":
      return <Skype width={width} height={height} className={classes} />;
    case "Slack":
      return <Slack width={width} height={height} className={classes} />;
    case "SlashCircle":
      return <SlashCircle width={width} height={height} className={classes} />;
    case "SlashLg":
      return <SlashLg width={width} height={height} className={classes} />;
    case "SlashSquare":
      return <SlashSquare width={width} height={height} className={classes} />;
    case "Slash":
      return <Slash width={width} height={height} className={classes} />;
    case "Sliders":
      return <Sliders width={width} height={height} className={classes} />;
    case "Sliders2Vertical":
      return (
        <Sliders2Vertical width={width} height={height} className={classes} />
      );
    case "Sliders2":
      return <Sliders2 width={width} height={height} className={classes} />;
    case "Smartwatch":
      return <Smartwatch width={width} height={height} className={classes} />;
    case "Snapchat":
      return <Snapchat width={width} height={height} className={classes} />;
    case "Snow":
      return <Snow width={width} height={height} className={classes} />;
    case "Snow2":
      return <Snow2 width={width} height={height} className={classes} />;
    case "Snow3":
      return <Snow3 width={width} height={height} className={classes} />;
    case "SortAlphaDownAlt":
      return (
        <SortAlphaDownAlt width={width} height={height} className={classes} />
      );
    case "SortAlphaDown":
      return (
        <SortAlphaDown width={width} height={height} className={classes} />
      );
    case "SortAlphaUpAlt":
      return (
        <SortAlphaUpAlt width={width} height={height} className={classes} />
      );
    case "SortAlphaUp":
      return <SortAlphaUp width={width} height={height} className={classes} />;
    case "SortDownAlt":
      return <SortDownAlt width={width} height={height} className={classes} />;
    case "SortDown":
      return <SortDown width={width} height={height} className={classes} />;
    case "SortNumericDownAlt":
      return (
        <SortNumericDownAlt width={width} height={height} className={classes} />
      );
    case "SortNumericDown":
      return (
        <SortNumericDown width={width} height={height} className={classes} />
      );
    case "SortNumericUpAlt":
      return (
        <SortNumericUpAlt width={width} height={height} className={classes} />
      );
    case "SortNumericUp":
      return (
        <SortNumericUp width={width} height={height} className={classes} />
      );
    case "SortUpAlt":
      return <SortUpAlt width={width} height={height} className={classes} />;
    case "SortUp":
      return <SortUp width={width} height={height} className={classes} />;
    case "Soundwave":
      return <Soundwave width={width} height={height} className={classes} />;
    case "Speaker":
      return <Speaker width={width} height={height} className={classes} />;
    case "Speedometer":
      return <Speedometer width={width} height={height} className={classes} />;
    case "Speedometer2":
      return <Speedometer2 width={width} height={height} className={classes} />;
    case "Spellcheck":
      return <Spellcheck width={width} height={height} className={classes} />;
    case "Spotify":
      return <Spotify width={width} height={height} className={classes} />;
    case "Square":
      return <Square width={width} height={height} className={classes} />;
    case "StackOverflow":
      return (
        <StackOverflow width={width} height={height} className={classes} />
      );
    case "Stack":
      return <Stack width={width} height={height} className={classes} />;
    case "Star":
      return <Star width={width} height={height} className={classes} />;
    case "Stars":
      return <Stars width={width} height={height} className={classes} />;
    case "Steam":
      return <Steam width={width} height={height} className={classes} />;
    case "Stickies":
      return <Stickies width={width} height={height} className={classes} />;
    case "Sticky":
      return <Sticky width={width} height={height} className={classes} />;
    case "StopBtn":
      return <StopBtn width={width} height={height} className={classes} />;
    case "StopCircle":
      return <StopCircle width={width} height={height} className={classes} />;
    case "Stop":
      return <Stop width={width} height={height} className={classes} />;
    case "Stoplights":
      return <Stoplights width={width} height={height} className={classes} />;
    case "Stopwatch":
      return <Stopwatch width={width} height={height} className={classes} />;
    case "Strava":
      return <Strava width={width} height={height} className={classes} />;
    case "Stripe":
      return <Stripe width={width} height={height} className={classes} />;
    case "Subscript":
      return <Subscript width={width} height={height} className={classes} />;
    case "Subtract":
      return <Subtract width={width} height={height} className={classes} />;
    case "SuitClub":
      return <SuitClub width={width} height={height} className={classes} />;
    case "SuitDiamond":
      return <SuitDiamond width={width} height={height} className={classes} />;
    case "SuitHeart":
      return <SuitHeart width={width} height={height} className={classes} />;
    case "SuitSpade":
      return <SuitSpade width={width} height={height} className={classes} />;
    case "Sun":
      return <Sun width={width} height={height} className={classes} />;
    case "Sunglasses":
      return <Sunglasses width={width} height={height} className={classes} />;
    case "Sunrise":
      return <Sunrise width={width} height={height} className={classes} />;
    case "Sunset":
      return <Sunset width={width} height={height} className={classes} />;
    case "Superscript":
      return <Superscript width={width} height={height} className={classes} />;
    case "SymmetryHorizontal":
      return (
        <SymmetryHorizontal width={width} height={height} className={classes} />
      );
    case "SymmetryVertical":
      return (
        <SymmetryVertical width={width} height={height} className={classes} />
      );
    case "Table":
      return <Table width={width} height={height} className={classes} />;
    case "TabletLandscape":
      return (
        <TabletLandscape width={width} height={height} className={classes} />
      );
    case "Tablet":
      return <Tablet width={width} height={height} className={classes} />;
    case "Tag":
      return <Tag width={width} height={height} className={classes} />;
    case "Tags":
      return <Tags width={width} height={height} className={classes} />;
    case "TaxiFront":
      return <TaxiFront width={width} height={height} className={classes} />;
    case "Telegram":
      return <Telegram width={width} height={height} className={classes} />;
    case "TelephoneForward":
      return (
        <TelephoneForward width={width} height={height} className={classes} />
      );
    case "TelephoneInbound":
      return (
        <TelephoneInbound width={width} height={height} className={classes} />
      );
    case "TelephoneMinus":
      return (
        <TelephoneMinus width={width} height={height} className={classes} />
      );
    case "TelephoneOutbound":
      return (
        <TelephoneOutbound width={width} height={height} className={classes} />
      );
    case "TelephonePlus":
      return (
        <TelephonePlus width={width} height={height} className={classes} />
      );
    case "TelephoneX":
      return <TelephoneX width={width} height={height} className={classes} />;
    case "Telephone":
      return <Telephone width={width} height={height} className={classes} />;
    case "TencentQq":
      return <TencentQq width={width} height={height} className={classes} />;
    case "TerminalDash":
      return <TerminalDash width={width} height={height} className={classes} />;
    case "TerminalPlus":
      return <TerminalPlus width={width} height={height} className={classes} />;
    case "TerminalSplit":
      return (
        <TerminalSplit width={width} height={height} className={classes} />
      );
    case "TerminalX":
      return <TerminalX width={width} height={height} className={classes} />;
    case "Terminal":
      return <Terminal width={width} height={height} className={classes} />;
    case "TextCenter":
      return <TextCenter width={width} height={height} className={classes} />;
    case "TextIndentLeft":
      return (
        <TextIndentLeft width={width} height={height} className={classes} />
      );
    case "TextIndentRight":
      return (
        <TextIndentRight width={width} height={height} className={classes} />
      );
    case "TextLeft":
      return <TextLeft width={width} height={height} className={classes} />;
    case "TextParagraph":
      return (
        <TextParagraph width={width} height={height} className={classes} />
      );
    case "TextRight":
      return <TextRight width={width} height={height} className={classes} />;
    case "TextWrap":
      return <TextWrap width={width} height={height} className={classes} />;
    case "TextareaResize":
      return (
        <TextareaResize width={width} height={height} className={classes} />
      );
    case "TextareaT":
      return <TextareaT width={width} height={height} className={classes} />;
    case "Textarea":
      return <Textarea width={width} height={height} className={classes} />;
    case "ThermometerHigh":
      return (
        <ThermometerHigh width={width} height={height} className={classes} />
      );
    case "ThermometerLow":
      return (
        <ThermometerLow width={width} height={height} className={classes} />
      );
    case "ThermometerSnow":
      return (
        <ThermometerSnow width={width} height={height} className={classes} />
      );
    case "ThermometerSun":
      return (
        <ThermometerSun width={width} height={height} className={classes} />
      );
    case "Thermometer":
      return <Thermometer width={width} height={height} className={classes} />;
    case "ThreeDotsVertical":
      return (
        <ThreeDotsVertical width={width} height={height} className={classes} />
      );
    case "ThreeDots":
      return <ThreeDots width={width} height={height} className={classes} />;
    case "Thunderbolt":
      return <Thunderbolt width={width} height={height} className={classes} />;
    case "TicketDetailed":
      return (
        <TicketDetailed width={width} height={height} className={classes} />
      );
    case "TicketPerforated":
      return (
        <TicketPerforated width={width} height={height} className={classes} />
      );
    case "Ticket":
      return <Ticket width={width} height={height} className={classes} />;
    case "Tiktok":
      return <Tiktok width={width} height={height} className={classes} />;
    case "ToggleOff":
      return <ToggleOff width={width} height={height} className={classes} />;
    case "ToggleOn":
      return <ToggleOn width={width} height={height} className={classes} />;
    case "Toggle2Off":
      return <Toggle2Off width={width} height={height} className={classes} />;
    case "Toggle2On":
      return <Toggle2On width={width} height={height} className={classes} />;
    case "Toggles":
      return <Toggles width={width} height={height} className={classes} />;
    case "Toggles2":
      return <Toggles2 width={width} height={height} className={classes} />;
    case "Tools":
      return <Tools width={width} height={height} className={classes} />;
    case "Tornado":
      return <Tornado width={width} height={height} className={classes} />;
    case "TrainFreightFront":
      return (
        <TrainFreightFront width={width} height={height} className={classes} />
      );
    case "TrainFront":
      return <TrainFront width={width} height={height} className={classes} />;
    case "TrainLightrailFront":
      return (
        <TrainLightrailFront
          width={width}
          height={height}
          className={classes}
        />
      );
    case "Translate":
      return <Translate width={width} height={height} className={classes} />;
    case "Trash":
      return <Trash width={width} height={height} className={classes} />;
    case "Trash2":
      return <Trash2 width={width} height={height} className={classes} />;
    case "Trash3":
      return <Trash3 width={width} height={height} className={classes} />;
    case "Tree":
      return <Tree width={width} height={height} className={classes} />;
    case "Trello":
      return <Trello width={width} height={height} className={classes} />;
    case "Triangle":
      return <Triangle width={width} height={height} className={classes} />;
    case "Trophy":
      return <Trophy width={width} height={height} className={classes} />;
    case "TropicalStorm":
      return (
        <TropicalStorm width={width} height={height} className={classes} />
      );
    case "TruckFlatbed":
      return <TruckFlatbed width={width} height={height} className={classes} />;
    case "TruckFront":
      return <TruckFront width={width} height={height} className={classes} />;
    case "Truck":
      return <Truck width={width} height={height} className={classes} />;
    case "Tsunami":
      return <Tsunami width={width} height={height} className={classes} />;
    case "Tv":
      return <Tv width={width} height={height} className={classes} />;
    case "Twitch":
      return <Twitch width={width} height={height} className={classes} />;
    case "Twitter":
      return <Twitter width={width} height={height} className={classes} />;
    case "TypeBold":
      return <TypeBold width={width} height={height} className={classes} />;
    case "TypeH1":
      return <TypeH1 width={width} height={height} className={classes} />;
    case "TypeH2":
      return <TypeH2 width={width} height={height} className={classes} />;
    case "TypeH3":
      return <TypeH3 width={width} height={height} className={classes} />;
    case "TypeItalic":
      return <TypeItalic width={width} height={height} className={classes} />;
    case "TypeStrikethrough":
      return (
        <TypeStrikethrough width={width} height={height} className={classes} />
      );
    case "TypeUnderline":
      return (
        <TypeUnderline width={width} height={height} className={classes} />
      );
    case "Type":
      return <Type width={width} height={height} className={classes} />;
    case "Ubuntu":
      return <Ubuntu width={width} height={height} className={classes} />;
    case "UiChecksGrid":
      return <UiChecksGrid width={width} height={height} className={classes} />;
    case "UiChecks":
      return <UiChecks width={width} height={height} className={classes} />;
    case "UiRadiosGrid":
      return <UiRadiosGrid width={width} height={height} className={classes} />;
    case "UiRadios":
      return <UiRadios width={width} height={height} className={classes} />;
    case "Umbrella":
      return <Umbrella width={width} height={height} className={classes} />;
    case "Unindent":
      return <Unindent width={width} height={height} className={classes} />;
    case "Union":
      return <Union width={width} height={height} className={classes} />;
    case "Unity":
      return <Unity width={width} height={height} className={classes} />;
    case "UniversalAccessCircle":
      return (
        <UniversalAccessCircle
          width={width}
          height={height}
          className={classes}
        />
      );
    case "UniversalAccess":
      return (
        <UniversalAccess width={width} height={height} className={classes} />
      );
    case "Unlock":
      return <Unlock width={width} height={height} className={classes} />;
    case "UpcScan":
      return <UpcScan width={width} height={height} className={classes} />;
    case "Upc":
      return <Upc width={width} height={height} className={classes} />;
    case "Upload":
      return <Upload width={width} height={height} className={classes} />;
    case "UsbC":
      return <UsbC width={width} height={height} className={classes} />;
    case "UsbDrive":
      return <UsbDrive width={width} height={height} className={classes} />;
    case "UsbMicro":
      return <UsbMicro width={width} height={height} className={classes} />;
    case "UsbMini":
      return <UsbMini width={width} height={height} className={classes} />;
    case "UsbPlug":
      return <UsbPlug width={width} height={height} className={classes} />;
    case "UsbSymbol":
      return <UsbSymbol width={width} height={height} className={classes} />;
    case "Usb":
      return <Usb width={width} height={height} className={classes} />;
    case "Valentine":
      return <Valentine width={width} height={height} className={classes} />;
    case "Valentine2":
      return <Valentine2 width={width} height={height} className={classes} />;
    case "VectorPen":
      return <VectorPen width={width} height={height} className={classes} />;
    case "ViewList":
      return <ViewList width={width} height={height} className={classes} />;
    case "ViewStacked":
      return <ViewStacked width={width} height={height} className={classes} />;
    case "Vimeo":
      return <Vimeo width={width} height={height} className={classes} />;
    case "Vinyl":
      return <Vinyl width={width} height={height} className={classes} />;
    case "Virus":
      return <Virus width={width} height={height} className={classes} />;
    case "Virus2":
      return <Virus2 width={width} height={height} className={classes} />;
    case "Voicemail":
      return <Voicemail width={width} height={height} className={classes} />;
    case "VolumeDown":
      return <VolumeDown width={width} height={height} className={classes} />;
    case "VolumeMute":
      return <VolumeMute width={width} height={height} className={classes} />;
    case "VolumeOff":
      return <VolumeOff width={width} height={height} className={classes} />;
    case "VolumeUp":
      return <VolumeUp width={width} height={height} className={classes} />;
    case "Vr":
      return <Vr width={width} height={height} className={classes} />;
    case "Wallet":
      return <Wallet width={width} height={height} className={classes} />;
    case "Wallet2":
      return <Wallet2 width={width} height={height} className={classes} />;
    case "Watch":
      return <Watch width={width} height={height} className={classes} />;
    case "Water":
      return <Water width={width} height={height} className={classes} />;
    case "Webcam":
      return <Webcam width={width} height={height} className={classes} />;
    case "Wechat":
      return <Wechat width={width} height={height} className={classes} />;
    case "Whatsapp":
      return <Whatsapp width={width} height={height} className={classes} />;
    case "Wifi1":
      return <Wifi1 width={width} height={height} className={classes} />;
    case "Wifi2":
      return <Wifi2 width={width} height={height} className={classes} />;
    case "WifiOff":
      return <WifiOff width={width} height={height} className={classes} />;
    case "Wifi":
      return <Wifi width={width} height={height} className={classes} />;
    case "Wikipedia":
      return <Wikipedia width={width} height={height} className={classes} />;
    case "Wind":
      return <Wind width={width} height={height} className={classes} />;
    case "WindowDash":
      return <WindowDash width={width} height={height} className={classes} />;
    case "WindowDesktop":
      return (
        <WindowDesktop width={width} height={height} className={classes} />
      );
    case "WindowDock":
      return <WindowDock width={width} height={height} className={classes} />;
    case "WindowFullscreen":
      return (
        <WindowFullscreen width={width} height={height} className={classes} />
      );
    case "WindowPlus":
      return <WindowPlus width={width} height={height} className={classes} />;
    case "WindowSidebar":
      return (
        <WindowSidebar width={width} height={height} className={classes} />
      );
    case "WindowSplit":
      return <WindowSplit width={width} height={height} className={classes} />;
    case "WindowStack":
      return <WindowStack width={width} height={height} className={classes} />;
    case "WindowX":
      return <WindowX width={width} height={height} className={classes} />;
    case "Window":
      return <Window width={width} height={height} className={classes} />;
    case "Windows":
      return <Windows width={width} height={height} className={classes} />;
    case "Wordpress":
      return <Wordpress width={width} height={height} className={classes} />;
    case "WrenchAdjustableCircle":
      return (
        <WrenchAdjustableCircle
          width={width}
          height={height}
          className={classes}
        />
      );
    case "WrenchAdjustable":
      return (
        <WrenchAdjustable width={width} height={height} className={classes} />
      );
    case "Wrench":
      return <Wrench width={width} height={height} className={classes} />;
    case "XCircle":
      return <XCircle width={width} height={height} className={classes} />;
    case "XDiamond":
      return <XDiamond width={width} height={height} className={classes} />;
    case "XLg":
      return <XLg width={width} height={height} className={classes} />;
    case "XOctagon":
      return <XOctagon width={width} height={height} className={classes} />;
    case "XSquare":
      return <XSquare width={width} height={height} className={classes} />;
    case "X":
      return <X width={width} height={height} className={classes} />;
    case "Xbox":
      return <Xbox width={width} height={height} className={classes} />;
    case "Yelp":
      return <Yelp width={width} height={height} className={classes} />;
    case "YinYang":
      return <YinYang width={width} height={height} className={classes} />;
    case "Youtube":
      return <Youtube width={width} height={height} className={classes} />;
    case "ZoomIn":
      return <ZoomIn width={width} height={height} className={classes} />;
    case "ZoomOut":
      return <ZoomOut width={width} height={height} className={classes} />;
    default:
      return <Icon123 width={width} height={height} className={classes} />;
  }
};

LionIcon.defaultProps = {
  name: "Icon123",
  width: "1em",
  height: "1em",
};

export default LionIcon;
