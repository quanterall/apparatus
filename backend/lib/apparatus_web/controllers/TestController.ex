defmodule ApparatusWeb.TestController do
  use ApparatusWeb, :controller

  def index(conn, _params) do
    json(conn, %{time: DateTime.utc_now()})
  end
end
