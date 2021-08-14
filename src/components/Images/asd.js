{triggerMenu && (
    <>
      <div
        onMouseEnter={() => setHover1(true)}
        onMouseLeave={() => setHover1(false)}
      >
        <div
          style={{ left: img1width / 3 + "px" }}
          className="plus"
        ></div>
      </div>

      <div>
        {hover1 && (
          <div style={{ left: img1width / 3.9 + "px" }}>
            <span>Чистим фасад вытяжки</span>
          </div>
        )}
      </div>

      <div
        onMouseEnter={() => setHover2(true)}
        onMouseLeave={() => setHover2(false)}
      >
        <div
          style={{ left: img1width / 2.8 + "px" }}
          className="plus"
        ></div>
      </div>

      <div>
        {hover2 && (
          <div style={{ left: img1width / 3.3 + "px" }}>
            <span>Чистим плитку</span>
          </div>
        )}
      </div>

      <div
        onMouseEnter={() => setHover3(true)}
        onMouseLeave={() => setHover3(false)}
      >
        <div
          style={{ left: img1width / 2.9 + "px" }}
          className="plus"
        ></div>
      </div>

      {hover3 && (
        <div>
          <div style={{ left: img1width / 3.2 + "px" }}>
            <span>Моем пол</span>
          </div>
        </div>
      )}

      <div
        onMouseEnter={() => setHover4(true)}
        onMouseLeave={() => setHover4(false)}
      >
        <div
          style={{ left: img1width / 1.9 + "px" }}
          className="plus"
        ></div>
      </div>

      {hover4 && (
        <div>
          <div style={{ left: img1width / 2.1 + "px" }}>
            <span>Выносим мусор</span>
          </div>
        </div>
      )}

      <div
        onMouseEnter={() => setHover5(true)}
        onMouseLeave={() => setHover5(false)}
      >
        <div
          style={{ left: img1width / 1.8 + "px" }}
          className="plus"
        ></div>
      </div>

      {hover5 && (
        <div>
          <div style={{ left: img1width / 2.1 + "px" }}>
            <span>Протираем столешницу</span>
          </div>
        </div>
      )}

      <div
        onMouseEnter={() => setHover6(true)}
        onMouseLeave={() => setHover6(false)}
      >
        <div
          style={{ left: img1width / 1.6 + "px" }}
          className="plus"
        ></div>
      </div>

      {hover6 && (
        <div>
          <div style={{ left: img1width / 2 + "px" }}>
            <span>Моем фасады кухонных гарнитуров</span>
          </div>
        </div>
      )}

      <div
        onMouseEnter={() => setHover7(true)}
        onMouseLeave={() => setHover7(false)}
      >
        <div
          style={{ left: img1width / 1.3 + "px" }}
          className="plus"
        ></div>
      </div>

      {hover7 && (
        <div>
          <div style={{ left: img1width / 1.4 + "px" }}>
            <span>Моем посуду</span>
          </div>
        </div>
      )}
    </>
  )}
</div>